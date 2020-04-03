import { Request } from 'express'

declare namespace Express {
  export interface Request {
    requestId?: string
  }
}

export function formatMetaOutput(
  meta: Record<string, any>
): Record<string, any> {
  for (const key in meta) {
    meta[key] = metaOutputReplacer(key, meta[key])
  }

  return meta
}

export function metaOutputReplacer(key: string, value: any) {
  switch (key) {
    case 'request':
      return formatRequest(value)

    default:
      return value
  }
}

function formatRequest(request: Request) {
  return request.requestId
}
