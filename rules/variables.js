module.exports = {
  'rules': {
    'no-catch-shadow': 1,            // http://eslint.org/docs/rules/no-catch-shadow
    'no-delete-var': 2,              // http://eslint.org/docs/rules/no-undef-init
    'no-label-var': 2,               // http://eslint.org/docs/rules/no-label-var
    'no-restricted-globals': 1,      // http://eslint.org/docs/rules/no-restricted-globals
    'no-shadow': 2,                  // http://eslint.org/docs/rules/no-shadow
    'no-shadow-restricted-names': 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-undef': 2,                   // http://eslint.org/docs/rules/no-undef
    'no-undef-init': 1,              // http://eslint.org/docs/rules/no-undef-init
    'no-undefined': 1,               // http://eslint.org/docs/rules/no-undefined
    'no-unused-vars': [2, {          // http://eslint.org/docs/rules/no-unused-vars
      'vars': 'local',
      'args': 'after-used'
    }],
    'no-use-before-define': 2        // http://eslint.org/docs/rules/no-use-before-define
  }
};
