#!/bin/bash

mkdir -p tmp/dist/
git status --porcelain | grep cql4browsers.js
if [ $? == 0 ]; then
  echo "cql4browsers.js has uncommitted changes. Reset or commit them before continuing."
  exit 1
fi

cp ./examples/browser/cql4browsers.js ./examples/browser/cql4browsers.js.original

if [ $? != 0 ]; then
  echo "cql4browsers.js not found. Run this script from the base repository directory."
  exit 1
fi
npm install

# comm -3 only returns lines that differ between the two files. If none are different, diff will be empty
diff=`diff ./examples/browser/cql4browsers.js.original ./examples/browser/cql4browsers.js`

mv ./examples/browser/cql4browsers.js.original ./examples/browser/cql4browsers.js

# Exit with a non-zero code if the diff isn't empty
if [ "$diff" != "" ]; then
  echo "cql4browsers.js is out of date. Please run 'npm install' locally and commit/push the result"
  exit 1
fi

echo "cql4browsers.js is up to date"
