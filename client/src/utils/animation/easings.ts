export const EaseIn = (pow: number) => (t: number) => Math.pow(t, pow)

export const EaseOut = (pow: number) => (t: number) =>
  1 - Math.abs(Math.pow(t - 1, pow))

export const EaseInOut = (pow: number) => (t: number) =>
  t < 0.5 ? EaseIn(pow)(t * 2) / 2 : EaseOut(pow)(t * 2 - 1) / 2 + 0.5

export const linear = EaseInOut(1)
export const easeInQuad = EaseIn(2)
export const easeOutQuad = EaseOut(2)
export const easeInOutQuad = EaseInOut(2)
export const easeInCubic = EaseIn(3)
export const easeOutCubic = EaseOut(3)
export const easeInOutCubic = EaseInOut(3)
export const easeInQuart = EaseIn(4)
export const easeOutQuart = EaseOut(4)
export const easeInOutQuart = EaseInOut(4)
export const easeInQuint = EaseIn(5)
export const easeOutQuint = EaseOut(5)
export const easeInOutQuint = EaseInOut(5)
