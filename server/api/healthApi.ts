import { Router } from 'express'

const healthRouter = Router()

const bootTime = new Date()

healthRouter.get('/', (req, res) => {
  res
    .status(200)
    .type('json')
    .send({
      boot: bootTime.toUTCString(),
      now: new Date().toUTCString()
    })
    .end()
})

export default healthRouter
