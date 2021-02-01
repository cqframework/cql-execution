#!/usr/bin/env node

/* eslint-disable no-console */

// We cannot use browserify CLI because there is no way to pass options into presets

const path = require('path');
const fs = require('fs');
const browserify = require('browserify');

console.log('Browserifing cql4browsers...');
const c4bpath = path.join(__dirname, '..', 'examples', 'browser', 'cql4browsers.js');
const outputJsFile = fs.createWriteStream(c4bpath);
browserify(path.join(__dirname, '..', 'examples', 'browser', 'simple-browser-support.js'))
  .bundle()
  .pipe(outputJsFile);
outputJsFile.on('finish', () => {
  console.log(`Done! Output to ${path.relative('.', c4bpath)}`);
});
