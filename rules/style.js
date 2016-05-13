module.exports = {
  'rules': {
    'indent': [2, 2],                 // http://eslint.org/docs/rules/indent
    'brace-style': [2, '1tbs', {      // http://eslint.org/docs/rules/brace-style
      'allowSingleLine': true
    }],
    'quotes': [2,                     // http://eslint.org/docs/rules/quotes
      'single', 'avoid-escape'
    ],
    'camelcase': [2, {                // http://eslint.org/docs/rules/camelcase
      'properties': 'never'
    }],
    'comma-spacing': [2, {            // http://eslint.org/docs/rules/comma-spacing
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],       // http://eslint.org/docs/rules/comma-style
    'eol-last': 2,                    // http://eslint.org/docs/rules/eol-last
    'func-names': 1,                  // http://eslint.org/docs/rules/func-names
    'key-spacing': [2, {              // http://eslint.org/docs/rules/key-spacing
      'beforeColon': false,
      'afterColon': true
    }],
    'new-cap': [2, {                  // http://eslint.org/docs/rules/new-cap
      'newIsCap': true
    }],
    'new-parens': 2,                  // http://eslint.org/docs/rules/new-parens
    'no-array-constructor': 2,        // http://eslint.org/docs/rules/no-array-constructor
    'no-lonely-if': 1,                // http://eslint.org/docs/rules/no-lonely-if
    'no-mixed-spaces-and-tabs': 1,    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-multiple-empty-lines': [2, {  // http://eslint.org/docs/rules/no-multiple-empty-lines
      'max': 2
    }],
    'no-nested-ternary': 2,           // http://eslint.org/docs/rules/no-nested-ternary
    'no-new-object': 2,               // http://eslint.org/docs/rules/no-new-object
    'no-spaced-func': 2,              // http://eslint.org/docs/rules/no-spaced-func
    'no-trailing-spaces': 2,          // http://eslint.org/docs/rules/no-trailing-spaces
    'no-extra-parens': [2, 'functions'], // http://eslint.org/docs/rules/no-extra-params
    'one-var': [2, 'never'],          // http://eslint.org/docs/rules/one-var
    'padded-blocks': [2, 'never'],    // http://eslint.org/docs/rules/padded-blocks
    'semi': [2, 'always'],            // http://eslint.org/docs/rules/semi
    'semi-spacing': [2, {             // http://eslint.org/docs/rules/semi-spacing
      'before': false,
      'after': true
    }],
    'keyword-spacing': [2, {          // http://eslint.org/docs/rules/keyword-spacing
      'before': true,
      'after': true,
      'overrides': {
        'return': {'after': true},
        'throw': {'after': true},
        'case': {'after': true}
      }
    }],
    'space-before-blocks': 2,         // http://eslint.org/docs/rules/space-before-blocks
    'space-before-function-paren': [2, 'never'], // http://eslint.org/docs/rules/space-before-function-paren
    'space-infix-ops': 2,             // http://eslint.org/docs/rules/space-infix-ops
    'space-unary-ops': 2,             // http://eslint.org/docs/rules/space-unary-ops
    'spaced-comment': [2, 'always', { // http://eslint.org/docs/rules/spaced-comment
      'exceptions': ['-', '+'],
      'markers': ['=', '!']           // space here to support sprockets directives
    }]
  }
};
