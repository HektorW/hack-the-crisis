import { STATUS_CODES } from 'http'

import { Router } from 'express'

import healthRouter from './healthApi'

const apiRouter = Router()

apiRouter.use('/health', healthRouter)

apiRouter.use((req, res) => {
  res
    .status(404)
    .send({ message: STATUS_CODES[404] })
    .end()
})

export default apiRouter
