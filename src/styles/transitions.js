const defaultTiming = '0.2s ease'
const bgTransition = `background ${defaultTiming}`
const colorTransition = `color ${defaultTiming}`
const defaultTransition = `${bgTransition}, ${colorTransition}`

export default {
    DEFAULT: defaultTransition,
    COLOR: colorTransition,
    BACKGROUND: bgTransition,
    ALL: defaultTiming
}