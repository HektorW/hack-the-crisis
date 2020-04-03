import { Request, Response, NextFunction } from 'express'
import { v1 as uuidv1 } from 'uuid'

import { createScopedLogger } from '../logging'

const logger = createScopedLogger(__filename)

export default function addRequestId(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const requestId = uuidv1()

  logger.debug('Adding requestId to request', {
    _request: {
      url: request.url,
      method: request.method
    },
    requestId
  })

  request.requestId = requestId

  next()
}
