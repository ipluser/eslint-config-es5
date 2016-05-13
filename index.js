module.exports = {
  'env': {                           // http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    'browser': true                  // browser global variables
  },
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ].map(require.resolve)
};
