/* This is dumb, but the alternatives I've found are more dumb. */
type FullColorArray = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

type SupportColorArray = readonly [string, string, string, string, string]

/*
 * The primary color is your "brand" color,
 * and is used across all elements. This color
 * can define the overall feel and can elicit emotion.
 */
export const primary: FullColorArray = [
  'hsla(193, 57%, 94%, 1)',
  'hsla(193, 78%, 86%, 1)',
  'hsla(193, 68%, 76%, 1)',
  'hsla(193, 65%, 60%, 1)',
  'hsla(193, 95%, 34%, 1)',
  'hsla(193, 100%, 27%, 1)',
  'hsla(193, 100%, 23%, 1)',
  'hsla(193, 100%, 19%, 1)',
  'hsla(193, 100%, 13%, 1)',
  'hsla(193, 100%, 8%, 1)',
]

/*
 * The secondary color highlights or complements
 * the primary color. These are used sparingly across
 * all interactive elements such as buttons, links, inputs, etc.
 */
export const secondary: FullColorArray = [
  'hsla(344, 100%, 97%, 1)',
  'hsla(344, 100%, 91%, 1)',
  'hsla(344, 100%, 81%, 1)',
  'hsla(344, 100%, 72%, 1)',
  'hsla(344, 100%, 53%, 1)',
  'hsla(344, 100%, 46%, 1)',
  'hsla(344, 100%, 41%, 1)',
  'hsla(344, 100%, 35%, 1)',
  'hsla(344, 100%, 26%, 1)',
  'hsla(344, 100%, 17%, 1)',
]

/*
 * The tertiary color highlights or complements the
 * primary and secondary color. These are to be used
 * to make the UI elements stand out.
 */
export const tertiary: FullColorArray = [
  'hsla(185, 29%, 97%, 1)',
  'hsla(185, 25%, 90%, 1)',
  'hsla(185, 24%, 77%, 1)',
  'hsla(185, 24%, 70%, 1)',
  'hsla(185, 24%, 61%, 1)',
  'hsla(185, 25%, 50%, 1)',
  'hsla(185, 24%, 43%, 1)',
  'hsla(185, 24%, 30%, 1)',
  'hsla(185, 24%, 23%, 1)',
  'hsla(185, 25%, 17%, 1)',
]

/*
 * This is color is used for star ratings and laurel icons.
 */
export const extended: FullColorArray = [
  'hsla(30, 86%, 93%, 1)',
  'hsla(38, 100%, 83%, 1)',
  'hsla(32, 100%, 73%, 1)',
  'hsla(32, 100%, 65%, 1)',
  'hsla(30, 86%, 62%, 1)',
  'hsla(30, 86%, 49%, 1)',
  'hsla(30, 86%, 42%, 1)',
  'hsla(30, 86%, 33%, 1)',
  'hsla(30, 87%, 22%, 1)',
  'hsla(29, 88%, 11%, 1)',
]

/*
 * Gray is a neutral color and is the foundation of the
 * color system. Almost everything in UI design —
 * text, form fields, backgrounds, dividers — are usually gray.
 */
export const gray: FullColorArray = [
  'hsla(187, 28%, 97%, 1)',
  'hsla(187, 19%, 90%, 1)',
  'hsla(187, 10%, 80%, 1)',
  'hsla(187, 6%, 70%, 1)',
  'hsla(187, 4%, 60%, 1)',
  'hsla(187, 4%, 50%, 1)',
  'hsla(187, 4%, 39%, 1)',
  'hsla(187, 5%, 30%, 1)',
  'hsla(187, 8%, 21%, 1)',
  'hsla(187, 11%, 13%, 1)',
]

/*
 * The text colors are used to define all text colors on the site.
 */
export const text: FullColorArray = [
  'hsla(211, 34%, 98%, 1)',
  'hsla(211, 33%, 95%, 1)',
  'hsla(215, 26%, 91%, 1)',
  'hsla(214, 21%, 84%, 1)',
  'hsla(216, 14%, 65%, 1)',
  'hsla(216, 12%, 47%, 1)',
  'hsla(216, 15%, 35%, 1)',
  'hsla(216, 21%, 27%, 1)',
  'hsla(218, 29%, 17%, 1)',
  'hsla(220, 37%, 11%, 1)',
]

/*
 * Positive, Error, Warning, Info, Alert.
 * These colors grab a users attention, provide feedback
 * and communicate behavior. If you're using one of these
 * colors as your primary color, it can be helpful to introduce
 * a different hue for your utility color.
 */
export const positive: SupportColorArray = [
  'hsla(149, 100%, 90%, 1)',
  'hsla(145, 96%, 72%, 1)',
  'hsla(152, 82%, 39%, 1)',
  'hsla(152, 82%, 27%, 1)',
  'hsla(152, 82%, 15%, 1)',
]

export const critical: SupportColorArray = [
  'hsla(17, 100%, 90%, 1)',
  'hsla(10, 100%, 73%, 1)',
  'hsla(4, 86%, 58%, 1)',
  'hsla(354, 97%, 38%, 1)',
  'hsla(0, 100%, 28%, 1)',
]

export const warning: SupportColorArray = [
  'hsla(34, 94%, 91%, 1)',
  'hsla(36, 100%, 69%, 1)',
  'hsla(34, 94%, 50%, 1)',
  'hsla(32, 100%, 40%, 1)',
  'hsla(23, 100%, 26%, 1)',
]

export const info: SupportColorArray = [
  'hsla(180, 100%, 92%, 1)',
  'hsla(192, 100%, 79%, 1)',
  'hsla(192, 100%, 45%, 1)',
  'hsla(194, 100%, 37%, 1)',
  'hsla(199, 100%, 25%, 1)',
]
