/* eslint-env node */

import { join } from 'path'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import dotenvFlow from 'dotenv-flow'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Configuration, DefinePlugin } from 'webpack'
import 'webpack-dev-server'

dotenvFlow.config()

const { env } = process

const config: Configuration = {
  mode: env.NODE_ENV === 'production' ? 'production' : 'development',

  context: join(__dirname, 'src'),

  entry: './index.tsx',

  output: {
    path: join(__dirname, 'dist'),
    filename:
      env.NODE_ENV === 'production'
        ? '[name].[contenthash:10].js'
        : '[name].js',
    chunkFilename:
      env.NODE_ENV === 'production'
        ? '[name].[contenthash:10].js'
        : '[name].js',
    publicPath: '/'
  },

  devServer: {
    port: env.PORT ? parseInt(env.PORT, 10) : 4003,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: join(__dirname, 'public'),
    proxy: {
      '/api': 'http://localhost:4004'
    }
  },

  devtool: env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',

  stats: {
    children: false,
    colors: true,
    env: true,
    modules: false
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },

    extensions: ['.tsx', '.ts', '.mjs', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        exclude: [/node_modules/],
        use: [
          env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName:
                  env.NODE_ENV === 'production'
                    ? '[hash:base64:8]'
                    : '[local]--[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'async',
      name: 'common'
    }
  },

  plugins: [
    // @ts-ignore
    new CleanWebpackPlugin(),

    // @ts-ignore
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public/index.html')
    }),

    new DefinePlugin({
      __DEV__: env.NODE_ENV !== 'production'
    }),

    // @ts-ignore
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:10].css',
      chunkFilename: '[name].[contenthash:10].css'
    })
  ]
}

export default config
