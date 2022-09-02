import { CSS, config, ThemeRadii } from './stitches.config'

/**
 * This helper is meant to make individual theme token range functions
 * easier to build by abstracting the repeated parts. It's primarily meant
 * for `variants` objects for Stitches styled components.
 *
 * @param cssProperty - the css object property to assign a value to
 * @param themeProperty - the `theme` key with the values you want to assign
 * @returns an `variants` CSS object with the css property assigned to each theme property
 * @example
 * getBorderRadii() {
 *   return getCssWithThemeValues('borderRadius', 'radii')
 * }
 */
export function getCssWithThemeValues(
  cssProperty: keyof CSS,
  themeProperty: keyof typeof config.theme
) {
  return Object.keys(config.theme[themeProperty]).reduce<{
    [key: string]: any
  }>((acc, curr) => {
    const typedCurrKey = curr as keyof typeof config.theme[typeof themeProperty]
    acc[curr] = {
      [cssProperty]: config.theme[themeProperty][typedCurrKey],
    }

    return acc
  }, {})
}

export function getAllSpacingVariants(cssShapeCallback: (val: string) => CSS) {
  return Object.keys(config.theme.space).reduce<{ [key: string]: any }>(
    (acc, curr) => {
      const typedCurrKey = curr as keyof typeof config.theme.space
      const val = config.theme.space[typedCurrKey]

      // Create the key;value at the current key, with the desired
      // object shape as the value.
      // e.g. { small: { width: "14px" } }
      acc[curr] = cssShapeCallback(val)
      return acc
    },
    {}
  )
}

export type VariantCSS<T extends string> = Record<T, CSS>

export function getAllBorderRadiiVariants(
  cssShapeCallback: (val: string) => CSS
): VariantCSS<ThemeRadii> {
  const tokens = Object.keys(config.theme.radii) as ThemeRadii[]
  return tokens.reduce<VariantCSS<ThemeRadii>>((acc, curr) => {
    const val = config.theme.radii[curr]
    acc[curr] = cssShapeCallback(val)
    return acc
  }, {} as VariantCSS<ThemeRadii>)
}

export function getFontWeights() {
  return getCssWithThemeValues('fontWeight', 'fontWeights')
}
