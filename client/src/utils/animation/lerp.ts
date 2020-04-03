export default function lerp(a: number, b: number, t: number) {
  return b + (a - b) * t
}
