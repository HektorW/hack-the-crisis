import { TransformableInfo } from 'logform'

import { cyan } from './colors'
import { formatMetaOutput } from './formatMetaOutput'

const { keys } = Object
const isObject = (obj: any) =>
  Object.prototype.toString.call(obj) === '[object Object]'

export default function customOutputFormat(info: TransformableInfo) {
  const { level, message, timestamp, loggerName, error, ...meta } = info

  let output = ''

  if (timestamp) {
    output += `${timestamp} `
  }

  output += `[${level}]`

  if (loggerName) {
    output += ` (${cyan(loggerName)})`
  }

  output += `: ${message}`

  const metaKeys = keys(meta)
  if (metaKeys.length !== 0) {
    output += formatMeta(meta, metaKeys)
  }

  if (error) {
    output += formatError(error)
  }

  return output
}

function formatMeta(meta: Record<string, any>, metaKeys: string[]): string {
  meta = formatMetaOutput(meta)

  const shouldRenderShortHand =
    metaKeys.length < 4 && metaKeys.every(key => !isObject(meta[key]))

  if (shouldRenderShortHand) {
    return cyan(` (${metaKeys.map(key => `${key}=${meta[key]}`).join(', ')})`)
  } else {
    return cyan(`\n${JSON.stringify(meta, null, 2)}`)
  }
}

function formatError(error: any): string {
  if (error instanceof Error) {
    return `
${error.name}
${error.message}
${error.stack}`
  } else {
    return `
error: ${error}`
  }
}
