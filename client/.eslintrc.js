const baseConfig = require('@hack-the-crisis/tools/.eslintrc')

module.exports = {
  ...baseConfig,

  env: {
    ...baseConfig.env,
    browser: true
  },

  extends: baseConfig.extends.concat([
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ]),

  plugins: baseConfig.plugins.concat(['react', 'react-hooks']),

  settings: {
    react: {
      version: 'detect'
    }
  },

  rules: {
    ...baseConfig.rules,

    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandLast: true,
        noSortAlphabetically: true,
        reservedFirst: ['key']
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },

  globals: {
    process: 'readonly',
    __DEV__: 'readonly'
  }
}
