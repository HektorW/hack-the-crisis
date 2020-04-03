const baseConfig = require('@hack-the-crisis/tools/.eslintrc')

module.exports = {
  ...baseConfig,

  env: {
    ...baseConfig.env,
    node: true
  }
}
