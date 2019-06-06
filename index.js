export default {
  extends: ['eslint-config-airbnb', 'plugin:jest/recommended'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'no-console': 0,
    'array-callback-return': 0,
    'comma-dangle': 0,
    'padded-blocks': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'prefer-promise-reject-errors': 0,
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false
      }
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
