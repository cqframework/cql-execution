/* oxlint-disable no-console */
const fs = require('fs');
const path = require('path');
const convert = require('xml-js');

let exitError = false; // if a non-fatal error occurs, report it and set this flag, but let processing continue

// First read the skiplist and build a map of skipped tests
const skipListFiles = ['common-skip-list.txt', 'runner-skip-list.txt'];
const skippedTestMap = new Map();
const processedSkips = new Set();
const invalidLines = new Set();

const parseTestNameAndReason = line => {
  // Ignore lines that are blank or commented out via #
  if (/(^\s*#)|(^\s*$)/.test(line)) {
    return;
  }
  // Pull out the thing being skipped and the reason for skipping
  const match = line.match(/^([A-Za-z0-9.]+|"[A-Za-z0-9.\s]+")\s+(.+)\s*$/);
  if (!match) {
    invalidLines.add(line);
    return;
  }
  const testName = match[1].replace(/(^")|("$)/g, '');
  const reason = match[2];
  if (skippedTestMap.has(testName)) {
    console.error(`Duplicate skipped test: ${testName}`);
    exitError = true;
  }
  skippedTestMap.set(testName, reason);
};

for (const skipListFile of skipListFiles) {
  const skipListText = fs.readFileSync(path.join(__dirname, skipListFile), 'utf-8');
  skipListText.split(/[\r\n]+/).forEach(parseTestNameAndReason);
}

// Do a pass through the actual tests to make sure the referenced tests exist, and expand test suite and group references to specific tests.
const inputDir = path.join(__dirname, '../../cql-tests-runner/cql-tests/tests/cql');

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
const PREVIOUS_CONFIG_PATH = path.join(
  __dirname,
  '../../cql-tests-runner/conf/cql-execution-local.json'
);
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
if (invalidLines.size > 0) {
  console.error();
  console.error('Invalid skip-list lines:');
  invalidLines.forEach(l => console.error(`> ${l}`));
  exitError = true;
}

processedSkips.forEach(s => skippedTestMap.delete(s));
if (skippedTestMap.size > 0) {
  console.error();
  console.error('Unmatched skip-list tests:');
  Array.from(skippedTestMap.keys()).forEach(k => console.error(`> ${k}`));
  exitError = true;
}

if (exitError) {
  process.exit(1);
}
