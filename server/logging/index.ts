import { join } from 'path'

import { createLogger } from 'winston'

import config from '../config'

import format from './format'
import transports from './transports'

const baseLogger = createLogger({
  level: config.logLevel,
  format,
  transports
})

export default baseLogger

/**
 * @param name Passing in `__filename` will scope it to the application root.
 */
export function createScopedLogger(
  name: string,
  extraMeta?: Record<string, any>
) {
  return baseLogger.child({
    loggerName: transformLoggerName(name),
    ...extraMeta
  })
}

function transformLoggerName(name: string) {
  // Assume this file is in the folder "$PROJECTROOT/logging"
  const projectRoot = join(__dirname, '../')

  if (name.includes(projectRoot)) {
    name = name
      .replace(projectRoot, '') // Remove project root
      .replace(/\\/g, '/') // Normalize separator between posix/windows
      .replace(/(index)?\.[tj]sx?/, '') // Only display folder name for index files and remove extension
  }

  return name
}
