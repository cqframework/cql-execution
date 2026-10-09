/* oxlint-disable no-console */
const fs = require('fs');
const path = require('path');
const convert = require('xml-js');

const cqlSpecVersion = fs.readFileSync(
  path.join(__dirname, '../../specification.version'),
  'utf-8'
);

let exitError = false; // if a non-fatal error occurs, report it and set this flag, but let processing continue

// First read the skiplist and build a map of skipped tests
const skipListFiles = ['common-skip-list.txt', 'unit-tests-skip-list.txt'];
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

const inputDir = path.join(__dirname, 'cql-tests-runner/cql-tests/tests/cql');
const outputDir = path.join(__dirname, 'cql');

if (!fs.existsSync(inputDir)) {
  console.error('ERROR: cql-tests under the cql-tests-runner submodule not found!');
  console.error(
    'Have you loaded the submodules by running `git submodule update --init --recursive` ?'
  );
  process.exit(1);
}

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

  // Construct the CQL
  const suiteName = xmlJS.tests._attributes.name;
  let cql = `library ${suiteName} version '1.4.0'\nusing QUICK version '3.3.0'\ncontext Patient\n`;
  xmlJS.tests.group.forEach((group, i) => {
    // Some groups have all their tests commented out.  In that case, don't generate the group at all.
    if (group.test == null || group.test.length === 0) {
      return;
    }

    const groupName = (group._attributes && group._attributes.name) || `Group${i + 1}`;
    cql += `\ndefine "${groupName}": Tuple{\n`;
    group.test.forEach((test, i) => {
      const testName = (test._attributes && test._attributes.name) || `Test${i + 1}`;
      let skipped;
      cql += `  "${testName}": Tuple{\n`;
      if (skippedTestMap.has(suiteName)) {
        skipped = skippedTestMap.get(suiteName);
        processedSkips.add(suiteName);
      } else if (skippedTestMap.has(`${suiteName}.${groupName}`)) {
        skipped = skippedTestMap.get(`${suiteName}.${groupName}`);
        processedSkips.add(`${suiteName}.${groupName}`);
      } else if (skippedTestMap.has(`${suiteName}.${groupName}.${testName}`)) {
        skipped = skippedTestMap.get(`${suiteName}.${groupName}.${testName}`);
        processedSkips.add(`${suiteName}.${groupName}.${testName}`);
      } else if (test.library != null) {
        skipped = 'Test <library> tag not supported in cql-execution test runner';
      } else if (test.expression._attributes && test.expression._attributes.invalid) {
        const invalid = test.expression._attributes.invalid;
        if (invalid === 'syntax') {
          skipped = 'Test includes an intentional syntax error; it cannot be parsed or translated';
        } else if (invalid === 'semantic') {
          skipped = 'Test includes an intentional semantic error; it parses but does not translate';
        }
      } else if (test._attributes && test._attributes.version > cqlSpecVersion) {
        skipped = `Test targets minimum CQL version ${test.version} which is higher than configured library target ${cqlSpecVersion}`;
      } else if (test._attributes && test._attributes.versionTo < cqlSpecVersion) {
        skipped = `Test targets maximum CQL version ${test.version} which is lower than configured library target ${cqlSpecVersion}`;
      }
      if (skipped != null) {
        cql += `    skipped: '${skipped.replace(/'/g, "\\'").trim()}'\n`;
        cql += '    /*\n';
      }
      if (test.library != null) {
        cql += `    library: ${test.library._text}`;
      }
      if (test.expression != null) {
        cql += `    expression: ${test.expression._text}`;
        if (test.expression._attributes && test.expression._attributes.invalid) {
          cql += `,\n    invalid: ${test.expression._attributes.invalid}`;
        }
      }
      if (test.output != null) {
        cql += `,\n    output: ${test.output._text}\n`;
      } else {
        cql += '\n';
      }
      if (skipped != null) {
        cql += '    */';
      }
      cql += i + 1 < group.test.length ? '  },\n' : '  }\n';
    });
    cql += '}\n';
  });

  // Write the CQL
  const cqlFile = path.join(outputDir, file.replace(/xml$/, 'cql'));
  fs.writeFileSync(cqlFile, cql, 'utf-8');
  console.log('Generated', cqlFile);
});

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
