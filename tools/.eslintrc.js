const prettierConfig = require('./prettier.config')

module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    es6: true
  },

  extends: [
    'standard',

    'plugin:import/recommended',
    'plugin:import/typescript',

    'prettier',
    'prettier/@typescript-eslint'
  ],

  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    'no-console': 'error',
    'no-empty-pattern': 'off',

    'prettier/prettier': ['error', prettierConfig],

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        caughtErrors: 'all'
      }
    ],

    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false
        },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        pathGroups: [
          {
            pattern: './*.scss',
            group: 'index',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ]
  }
}
