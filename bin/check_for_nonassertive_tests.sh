#!/bin/bash

# Check for a test that is missing () at the end of an assert
egrep -r "\.be\.\\w+$" ./test

if [ $? != 1 ]; then
  echo "Tests found with non-assertive statments.  Make sure to add () to the
end of tests.  For example x.should.be.true()"
  exit 1
fi

egrep -r "\.not\.\\w+$" ./test
if [ $? != 1 ]; then
  echo "Tests found with non-assertive statments. For example, use
  should.not.exist(x) instead of x.should.not.exist"
  exit 1
fi
