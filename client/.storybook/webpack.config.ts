import { Configuration } from 'webpack'
import webpackConfig from '../webpack.config'

interface StorybookFullControlModeArgs {
  mode: 'DEVELOPMENT' | 'PRODUCTION'
  config: Configuration
}

module.exports = async ({ config }: StorybookFullControlModeArgs) => {
  config.resolve = config.resolve || {}
  config.resolve.alias = webpackConfig.resolve!.alias
  config.resolve.modules = webpackConfig.resolve!.modules
  config.resolve.extensions = webpackConfig.resolve!.extensions

  config.module!.rules = webpackConfig.module!.rules

  return config
}
