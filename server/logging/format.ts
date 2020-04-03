import { format } from 'winston'

import customOutputFormat from './customOutputFormat'

const formatList = [format.timestamp()]

formatList.unshift(format.colorize())
formatList.push(format.printf(customOutputFormat))

export default format.combine(...formatList)
