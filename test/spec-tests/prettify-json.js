/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const cqlDir = path.join(__dirname, 'cql');

let entries;
try {
  entries = fs.readdirSync(cqlDir, { withFileTypes: true });
} catch (e) {
  console.error(`ERROR: Could not read folder: ${cqlDir}\n${e.message}`);
  process.exit(1);
}

const jsonFiles = entries
  .filter(e => e.isFile() && e.name.toLowerCase().endsWith('.json'))
  .map(e => path.join(cqlDir, e.name));

for (const file of jsonFiles) {
  try {
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    const prettyJSON = JSON.stringify(json, null, 2) + '\n';

    if (prettyJSON !== json) {
      fs.writeFileSync(file, prettyJSON, 'utf8');
      console.log(`Prettified ${file}`);
    }
  } catch (err) {
    console.error(`ERROR: Failed to prettify ${file}:\n  ${err.message}`);
  }
}
