/* eslint-env node */

module.exports = function(api) {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'entry',
          corejs: '3.6.3'
        }
      ],
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],

    plugins: [
      'react-hot-loader/babel',
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: false,
          regenerator: true
        }
      ],
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining'
    ]
  }
}
