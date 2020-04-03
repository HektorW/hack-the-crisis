import { join } from 'path'

import { Router, static as serveStatic, Request, Response } from 'express'

import config from '../config'

export default function createClientRoute() {
  if (process.env.NODE_ENV === 'development') {
    return function redirectMiddleware(req: Request, res: Response) {
      res.redirect('http://localhost:4001')
    }
  }

  const router = Router()

  router.use(serveStatic(config.clientDistFolder))
  router.use((req, res, next) => {
    if (
      req.method === 'GET' &&
      req.accepts('html') &&
      req.url.includes('.') !== true
    ) {
      return res.sendFile(join(config.clientDistFolder, 'index.html'))
    }
    next()
  })

  return router
}
