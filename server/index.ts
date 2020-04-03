import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import expressSession from 'express-session'

import apiRouter from './api'
import createClientRoute from './client-routing/createClientRoute'
import config from './config'
import baseLogger from './logging'
import addRequestId from './middleware/addRequestId'
import forceSsl from './middleware/forceSsl'

const app = express()

if (config.forceSsl) {
  app.use(forceSsl)
}

app.disable('x-powered-by')

app.use(addRequestId)

app.use(cookieParser())
app.use(bodyParser.json())
// app.use(
//   expressSession({
//     name: 'em-tipp-session',
//     secret: process.env.SESSION_SECRET || 'em-tipp-secret',
//     cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
//     resave: true,
//     saveUninitialized: true
//   })
// )

app.use('/api', apiRouter)

app.use(createClientRoute())

app.listen(config.port, () => {
  baseLogger.info(`Server started on port:${config.port}`, config)
})
