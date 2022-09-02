import { createStitches, CSS as StitchesCSS } from '@stitches/react'
import * as colors from './colors'
import { headingFontSizes, textFontSizes } from './text'

export const breakpoints = [640, 768, 1024]

export const { css, styled, globalCss, config, createTheme, getCssText } =
  createStitches({
    theme: {
      colors: {
        // Box
        boxNeutral: 'white',
        boxNeutralInverse: colors.primary[8],
        boxSubdued: colors.gray[0],
        boxPositive: colors.positive[0],
        boxWarning: colors.warning[0],
        boxCritical: colors.critical[0],
        boxInfo: colors.info[0],
        boxAttract: colors.primary[0],
        boxDisabled: colors.gray[1],

        /* Progress
         * These are intended for progress bars, such as percentage complete,
         * time remaining, usage allotment, etc.
         * */
        progressFillNeutral: colors.tertiary[6],
        progressFillNeutralInverse: colors.primary[5],
        progressFillPositive: colors.positive[2],
        progressFillWarning: colors.warning[2],
        progressFillCritical: colors.critical[3],
        progressFillInfo: colors.info[2],
        progressFillDisabled: colors.gray[4],
        progressFillAttract: colors.secondary[4],
        progressFillSubdued: colors.text[5],

        progressEmptyNeutral: colors.tertiary[1],
        progressEmptyNeutralInverse: colors.tertiary[9],
        progressEmptyPositive: colors.positive[0],
        progressEmptyWarning: colors.warning[0],
        progressEmptyCritical: colors.critical[0],
        progressEmptyInfo: colors.info[1],
        progressEmptyDisabled: colors.gray[1],
        progressEmptyAttract: colors.secondary[1],
        progressEmptySubdued: colors.tertiary[1],

        dividerDefault: colors.gray[1],
        dividerHeavy: colors.gray[2],

        ordinalFirst: colors.extended[3],
        ordinalSecond: colors.tertiary[6],
        ordinalThird: colors.gray[3],

        textNeutral: colors.text[7],
        textNeutralInverse: 'white',
        textSubdued: colors.text[5],
        textPositive: colors.positive[3],
        textWarning: colors.warning[3],
        textCritical: colors.critical[3],
        textInfo: colors.info[3],
        textAttract: colors.primary[5],
        textDisabled: colors.text[4],

        link: colors.primary[5],
        linkNeutralInverse: 'white',
        linkVisited: colors.primary[5],
        linkVisitedNeutralInverse: 'white',

        headingNeutral: colors.text[8],
        headingNeutralInverse: 'white',
        headingSubdued: colors.text[6],
        headingPositive: colors.positive[4],
        headingAttract: colors.primary[5],
        headingWarning: colors.warning[4],
        headingCritical: colors.critical[4],
        headingDisabled: colors.text[3],

        navItemDefault: colors.text[6],
        navItemHeading: colors.primary[7],
        linkDefault: colors.primary[4],

        actionAttractText: 'white',
        actionAttractDefault: colors.secondary[5],
        actionAttractHovered: colors.secondary[7],
        actionAttractFocused: colors.secondary[6],
        actionAttractDisabled: colors.secondary[0],
        actionAttractDisabledText: colors.secondary[2],
        actionNeutralText: 'white',
        actionNeutralDefault: colors.primary[5],
        actionNeutralHovered: colors.primary[8],
        actionNeutralFocused: colors.primary[6],
        actionNeutralDisabled: colors.primary[0],
        actionNeutralDisabledText: colors.primary[2],
        actionHollowText: colors.primary[6],
        actionHollowDefault: 'transparent',
        actionHollowHovered: colors.primary[0],
        actionHollowHoveredText: colors.primary[7],
        actionHollowFocused: 'transparent',
        actionHollowFocusedText: colors.primary[6],
        actionHollowDisabled: 'transparent',
        actionHollowDisabledText: colors.primary[1],
        actionLinkText: colors.primary[4],
        actionLinkDefault: 'transparent',
        actionLinkHovered: colors.primary[0],
        actionLinkHoveredText: colors.primary[4],
        actionLinkFocused: colors.primary[0],
        actionLinkFocusedText: colors.primary[7],
        actionLinkDisabled: 'transparent',
        actionLinkDisabledText: colors.primary[2],

        price: colors.primary[6],

        attractFocus: colors.secondary[2],
        neutralFocus: colors.primary[2],

        focusOutline: colors.info[1],

        iconStrokeNeutral: colors.gray[7],
        iconStrokeNeutralInverse: 'white',
        iconStrokePositive: colors.positive[2],
        iconStrokeWarning: colors.warning[3],
        iconStrokeCritical: colors.critical[2],
        iconStrokeInfo: colors.info[3],
        iconStrokeDisabled: colors.gray[2],
        iconStrokeAttract: colors.primary[4],
        iconStrokeSubdued: colors.text[5],

        iconBackgroundNeutral: 'white',
        iconBackgroundNeutralInverse: colors.primary[8],
        iconBackgroundPositive: colors.positive[0],
        iconBackgroundWarning: colors.warning[0],
        iconBackgroundCritical: colors.critical[0],
        iconBackgroundInfo: colors.info[0],
        iconBackgroundDisabled: colors.gray[1],
        iconBackgroundAttract: colors.primary[0],
        iconBackgroundSubdued: colors.tertiary[1],

        inputEnabledLabel: colors.text[7],
        inputEnabledValue: colors.text[8],
        inputEnabledPlaceholder: colors.text[5],
        inputEnabledBorder: colors.gray[3],
        inputEnabledBackground: 'white',

        inputDisabledLabel: colors.text[7],
        inputDisabledValue: colors.text[5],
        inputDisabledPlaceholder: colors.text[5],
        inputDisabledBorder: colors.gray[3],
        inputDisabledBackground: colors.gray[0],

        inputErrorLabel: colors.text[7],
        inputErrorValue: colors.text[8],
        inputErrorPlaceholder: colors.text[5],
        inputErrorBorder: colors.critical[1],
        inputErrorBackground: 'white',

        tableBaseBackground: 'white',
        tableAltBackground: colors.gray[0],
      },
      space: {
        gutter: '16px',
        '00': '0px',
        '01': '4px',
        '02': '8px',
        '03': '12px',
        '04': '16px',
        '05': '20px',
        '06': '24px',
        '07': '32px',
        '08': '40px',
        '09': '48px',
        '10': '64px',
        '11': '80px',
        '12': '96px',
        '13': '128px',
        '14': '160px',
        '15': '192px',
        '16': '224px',
        '17': '256px',
      },
      fontSizes: {
        ...textFontSizes,
        ...headingFontSizes,
      },
      fontWeights: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '600',
        heavy: '700',
        textDefault: '400',
        headingDefault: '700',
      },
      fonts: {
        title: "'IBM Plex Sans', sans-serif",
        body: "'IBM Plex Sans', sans-serif",
      },
      shadows: {
        none: 'none',
        low: '0 1px 3px 0px rgba(0, 31, 41, 0.1)',
        medium: '0 4px 8px -2px rgba(0, 31, 41, 0.1)',
        high: '0 12px 16px -4px rgba(0, 31, 41, 0.1)',
        highest: '0 20px 24px -4px rgba(0, 31, 41, 0.1)',
      },
      borderWidths: {
        sm: '1px',
        md: '2px',
        lg: '4px',
        xl: '6px',
      },
      radii: {
        sharp: '0px',
        round: '8px',
        rounder: '16px',
        roundest: '24px',
        full: '9999px',
      },
    },
    media: {
      bp1: `(min-width: ${breakpoints[0]}px)`,
      bp2: `(min-width: ${breakpoints[1]}px)`,
      bp3: `(min-width: ${breakpoints[2]}px)`,
    },
    utils: {
      focusOutline: (on: boolean): StitchesCSS =>
        on
          ? {
              outline: '2px solid $focusOutline',
              outlineOffset: '0.6px',
            }
          : {
              outline: 'none',
            },
    },
  })

export type CSS = StitchesCSS<typeof config>
export type ThemeRadii = keyof typeof config.theme.radii
export type ThemeSpace = keyof typeof config.theme.space
export type ThemeShadows = keyof typeof config.theme.shadows
export type ThemeFontSizes = keyof typeof config.theme.fontSizes
export type { ThemeTextFontSizes } from './text'
export type { ThemeHeadingFontSizes } from './text'

/*
 * `textDefault` and `headingDefault` are base settings that we
 * don't want to be possible props that can be passed to the
 * `Text` and `Heading` components.
 */
export type ThemeFontWeights = keyof Omit<
  typeof config.theme.fontWeights,
  'textDefault' | 'headingDefault'
>

export type ThemeBreakPoints = keyof typeof config.media

export type ThemeVibes =
  | 'neutral'
  | 'neutralInverse'
  | 'subdued'
  | 'positive'
  | 'warning'
  | 'critical'
  | 'info'
  | 'attract'
  | 'disabled'
