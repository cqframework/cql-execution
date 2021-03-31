/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const convert = require('xml-js');

// First read the skiplist and build a map of skipped tests
const skippedTestMap = new Map();
const skipListText = fs.readFileSync(path.join(__dirname, 'skip-list.txt'), 'utf-8');
const processedSkips = new Set();
const invalidLines = new Set();
skipListText.split(/[\r\n]+/).forEach(line => {
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
  skippedTestMap.set(match[1].replace(/(^")|("$)/g, ''), match[2]);
});

fs.readdirSync(path.join(__dirname, 'xml')).forEach(file => {
  if (!file.endsWith('.xml')) {
    return;
  }

  // Read the XML file
  const xmlFile = path.join(__dirname, 'xml', file);
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
      }
      if (skipped != null) {
        cql += `    skipped: '${skipped.replace(/'/g, "\\'").trim()}'\n`;
        cql += '    /*\n';
      }
      cql += `    expression: ${test.expression._text}`;
      if (test.expression._attributes && test.expression._attributes.invalid) {
        if (test.expression._attributes.invalid == 'true') {
          cql += ',\n    invalid: true';
        } else if (test.expression._attributes.invalid == 'semantic') {
          cql += ",\n    invalid: 'semantic'";
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
  const cqlFile = path.join(__dirname, 'cql', file.replace(/xml$/, 'cql'));
  fs.writeFileSync(cqlFile, cql, 'utf-8');
  console.log('Generated', cqlFile);
});

if (invalidLines.size > 0) {
  console.error();
  console.error('Invalid lines in skip-list.txt:');
  invalidLines.forEach(l => console.error(`> ${l}`));
}

processedSkips.forEach(s => skippedTestMap.delete(s));
if (skippedTestMap.size > 0) {
  console.error();
  console.error('Unmatched tests in skip-list.txt:');
  Array.from(skippedTestMap.keys()).forEach(k => console.error(`> ${k}`));
}
