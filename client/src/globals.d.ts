/**
 * If `true` indicates that code is compiled in development mode.
 * Should be used to add code paths not included in a production build.
 * */
declare const __DEV__: boolean

declare module '*.scss' {
  const value: { [className: string]: string }
  export = value
}
