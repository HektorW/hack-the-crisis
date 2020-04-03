export const red = (text: string) => colorAndReset('\x1b[31m', text)
export const green = (text: string) => colorAndReset('\x1b[32m', text)
export const yellow = (text: string) => colorAndReset('\x1b[33m', text)
export const blue = (text: string) => colorAndReset('\x1b[34m', text)
export const magenta = (text: string) => colorAndReset('\x1b[35m', text)
export const cyan = (text: string) => colorAndReset('\x1b[36m', text)
export const white = (text: string) => colorAndReset('\x1b[37m', text)

export const bgBlack = (text: string) => colorAndReset('\x1b[40m', text)
export const bgRed = (text: string) => colorAndReset('\x1b[41m', text)
export const bgGreen = (text: string) => colorAndReset('\x1b[42m', text)
export const bgYellow = (text: string) => colorAndReset('\x1b[43m', text)
export const bgBlue = (text: string) => colorAndReset('\x1b[44m', text)
export const bgMagenta = (text: string) => colorAndReset('\x1b[45m', text)
export const bgCyan = (text: string) => colorAndReset('\x1b[46m', text)
export const bgWhite = (text: string) => colorAndReset('\x1b[47m', text)

const RESET_COLORS = '\x1b[0m'

function colorAndReset(color: string, text: string) {
  return `${color}${text}${RESET_COLORS}`
}
