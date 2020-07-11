module.exports = {
  mochaEnvFilePattern: '^.*-test.js$',
  decaffeinateArgs: [
    '--loose-default-params',
    '--loose-for-expressions',
    '--loose-for-of',
    '--loose-includes',
    '--loose-js-modules'
  ]
};