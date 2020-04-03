import { transports } from 'winston'
import * as Transport from 'winston-transport'

const transportList: Transport[] = []

transportList.push(new transports.Console())

export default transportList
