import { STATUS_CODES } from 'http'

import { Request, Response, NextFunction } from 'express'

export default function ensureUserAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  next()

  /* Re-add if necessary */
  // if (!request.isAuthenticated()) {
  //   response
  //     .status(401)
  //     .send({ message: STATUS_CODES[401] })
  //     .end()
  // } else {
  //   next()
  // }
}
