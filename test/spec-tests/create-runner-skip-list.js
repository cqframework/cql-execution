/* oxlint-disable no-console */
const fs = require('fs');
const path = require('path');
const convert = require('xml-js');

// First read the skiplist and build a map of skipped tests
const skippedTestMap = new Map();
const unskippedTestMap = new Map();
const skipListText = fs.readFileSync(path.join(__dirname, 'skip-list.txt'), 'utf-8');
const runnerSkipOverrides = fs.readFileSync(
  path.join(__dirname, 'runner-skip-overrides.txt'),
  'utf-8'
);
const processedSkips = new Set();
const invalidSkipListLines = new Set();
const invalidOverridesLines = new Set();

let exitError = false; // if a non-fatal error occurs, report it and set this flag, but let processing continue

// There are 3 categories of skips to consider:
// 1. Skip both in unit tests and cql-tests-runner. These are defined in skip-list.txt and not in runner-skip-overrides.txt. No special action needed.
// 2. Skip only in tests-runner, not in unit tests. These are present in runner-skip-overrides.txt but no special action needed: just treat them like they were in skip-list.txt.
// 3. Skip only in unit tests, not in tests-runner. These either need to be identified by category name, or in the overrides "unskip"/"exclude" category.

// The categories from the original skip-list file that we always ignore here
const CATEGORIES_TO_IGNORE = [
  'Incorrect answer',
  'Numeric Type Mismatch', // the runner compares all numeric results as JS number, so the type distinction is irrelevant there
  'Unimplemented',
  'Unimplemented (New in CQL 1.5)',
  'Unimplemented (New in CQL 2.0)'
];

// The names of groups from the overrides file that we have to cross-reference to the skip-list and "un-skip".
const CATEGORIES_TO_UNSKIP = [
  'Exclude (Tests/groups from skip-list.txt that the tests-runner should execute)'
];

// Helper function to process the common format of skip-list.txt and runner-skip-overrides.txt
const processFile = (fileText, invalidLinesSet) => {
  let currentCategory;
  fileText.split(/[\r\n]+/).forEach(line => {
    // Ignore blank lines
    if (!line.trim()) {
      return;
    }

    // Assume any line starting with # is a category header. Lines should only be commented out for debugging elsewhere
    if (line.startsWith('#')) {
      currentCategory = line.substring(1).trim();
      return;
    }

    if (CATEGORIES_TO_IGNORE.includes(currentCategory)) {
      // Skip processing this line
      return;
    }

    // Pull out the test/group and the reason
    const match = line.match(/^([A-Za-z0-9.]+|"[A-Za-z0-9.\s]+")\s+(.+)\s*$/);
    if (!match) {
      invalidLinesSet.add(line);
      return;
    }
    const testName = match[1].replace(/(^")|("$)/g, '');
    const reason = match[2];

    if (CATEGORIES_TO_UNSKIP.includes(currentCategory)) {
      unskippedTestMap.set(testName, { hit: false }); // reason not important for unskips, but use a boolean to track whether it's used
    } else {
      skippedTestMap.set(testName, reason);
    }
  });
};

processFile(skipListText, invalidSkipListLines);
processFile(runnerSkipOverrides, invalidOverridesLines);

for (const testName of skippedTestMap.keys()) {
  const testNameParts = testName.split('.');

  switch (testNameParts.length) {
    case 3:
      if (unskippedTestMap.has(testName)) {
        skippedTestMap.delete(testName);
        unskippedTestMap.get(testName).hit = true;
      }
    // intentionally fall through
    case 2:
      const testGroup = testNameParts[0] + '.' + testNameParts[1];
      if (unskippedTestMap.has(testGroup)) {
        skippedTestMap.delete(testName);
        unskippedTestMap.get(testGroup).hit = true;
      }
    // intentionally fall through
    case 1:
      const testFile = testNameParts[0];
      if (unskippedTestMap.has(testFile)) {
        skippedTestMap.delete(testName);
        unskippedTestMap.get(testFile).hit = true;
      }
  }
}

for (const [testName, hitTracker] of unskippedTestMap) {
  if (!hitTracker.hit) {
    console.error(
      `${testName} was marked to be unskipped, but no matching lines were found in skip-list`
    );
    exitError = true;
  }
}

// Now, the skippedTestMap contains only items we actually want to skip.
// Do a pass through the actual tests to make sure the referenced tests exist, and expand test suite and group references to specific tests.

const inputDir = path.join(__dirname, 'cql-tests-runner/cql-tests/tests/cql');

if (!fs.existsSync(inputDir)) {
  console.error('ERROR: cql-tests under the cql-tests-runner submodule not found!');
  console.error(
    'Have you loaded the submodules by running `git submodule update --init --recursive` ?'
  );
  process.exit(1);
}

// keep track of keys in skippedTestMap that refer to suites or groups, not individual tests, so we can remove them later
const testKeysToRemove = new Set();

fs.readdirSync(inputDir).forEach(file => {
  if (!file.endsWith('.xml')) {
    return;
  }

  // Read the XML file
  const xmlFile = path.join(inputDir, file);
  let xmlJS;
  try {
    const xml = fs.readFileSync(xmlFile, 'utf-8');
    xmlJS = convert.xml2js(xml, { compact: true, trim: true });
  } catch (err) {
    console.error(`ERROR: Could not parse ${xmlFile}:\n  ${err.message}`);
    return;
  }

  // Make sure it at least has a name and one or more groups
  if (
    xmlJS.tests == null ||
    xmlJS.tests._attributes == null ||
    xmlJS.tests._attributes.name == null ||
    xmlJS.tests.group == null
  ) {
    console.error(`ERROR: ${xmlFile} missing tests, tests[name], or tests.group`);
    return;
  }

  // Fix up arrays since xml2js won't create an array if there is only one item
  if (!Array.isArray(xmlJS.tests.group)) {
    xmlJS.tests.group = xmlJS.tests.group ? [xmlJS.tests.group] : [];
  }
  xmlJS.tests.group.forEach(group => {
    if (!Array.isArray(group.test)) {
      group.test = group.test ? [group.test] : [];
    }
  });

  const suiteName = xmlJS.tests._attributes.name;
  xmlJS.tests.group.forEach((group, i) => {
    // Some groups have all their tests commented out.  In that case, don't generate the group at all.
    if (group.test == null || group.test.length === 0) {
      return;
    }

    const groupName = (group._attributes && group._attributes.name) || `Group${i + 1}`;
    const fullGroupName = `${suiteName}.${groupName}`;
    group.test.forEach((test, i) => {
      const testName = (test._attributes && test._attributes.name) || `Test${i + 1}`;
      const fullTestName = `${suiteName}.${groupName}.${testName}`;
      if (skippedTestMap.has(suiteName)) {
        processedSkips.add(suiteName);

        // the runner only skips at the test level, so add this test to the map
        skippedTestMap.set(fullTestName, skippedTestMap.get(suiteName));
        processedSkips.add(fullTestName);

        testKeysToRemove.add(suiteName); // and mark this key to be removed later
      } else if (skippedTestMap.has(fullGroupName)) {
        processedSkips.add(fullGroupName);

        // the runner only skips at the test level, so add this test to the map
        skippedTestMap.set(fullTestName, skippedTestMap.get(fullGroupName));
        processedSkips.add(fullTestName);

        testKeysToRemove.add(suiteName); // and mark this key to be removed later
      } else if (skippedTestMap.has(fullTestName)) {
        processedSkips.add(fullTestName);
      }
    });
  });
});

// now remove the test suite and test group keys found above
for (const key of testKeysToRemove) {
  skippedTestMap.delete(key);
}

// Now load the previous config file and update the SkipList
const PREVIOUS_CONFIG_PATH = path.join(__dirname, 'cql-tests-runner/conf/cql-execution-local.json');
const config = JSON.parse(fs.readFileSync(PREVIOUS_CONFIG_PATH, 'utf8'));

if (!config.Tests) {
  console.error('Previous runner configuration must contain Tests field');
  process.exit(1);
}

config.Tests.SkipList = [];

for (const [testName, reason] of skippedTestMap) {
  const testNameParts = testName.split('.');
  // should always be 3 parts at this point, due to cleanup above

  const skipObj = {
    testsName: testNameParts[0],
    groupName: testNameParts[1],
    testName: testNameParts[2],
    reason: reason
  };

  config.Tests.SkipList.push(skipObj);
}

// Write output to repo top-level
const outputPath = path.join(__dirname, '../../cql-execution-local.json');
fs.writeFileSync(outputPath, JSON.stringify(config, null, '\t'));
console.log(
  `Generated new cql-test-runner config file at ${outputPath}. ${skippedTestMap.size} tests skipped`
);

// Final cleanup
if (invalidSkipListLines.size > 0) {
  console.error();
  console.error('Invalid lines in skip-list.txt:');
  invalidSkipListLines.forEach(l => console.error(`> ${l}`));
  exitError = true;
}
if (invalidOverridesLines.size > 0) {
  console.error();
  console.error('Invalid lines in runner-skip-overrides.txt:');
  invalidOverridesLines.forEach(l => console.error(`> ${l}`));
  exitError = true;
}

processedSkips.forEach(s => skippedTestMap.delete(s));
if (skippedTestMap.size > 0) {
  console.error();
  console.error('Unmatched tests in skip-list.txt or runner-skip-overrides.txt:');
  Array.from(skippedTestMap.keys()).forEach(k => console.error(`> ${k}`));
  exitError = true;
}

if (exitError) {
  process.exit(1);
}
