import { join } from 'path'

import dotenv from 'dotenv-flow'

dotenv.config()

const { env } = process

export default {
  port: env.PORT || 4004,
  forceSsl: env.FORCE_SSL === 'true',
  clientDistFolder: join(__dirname, '../client/dist'),
  logLevel: env.LOG_LEVEL || 'info'
}
