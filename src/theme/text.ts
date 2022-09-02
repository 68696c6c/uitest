export type ThemeTextFontSizes =
  | 'textxs'
  | 'textsm'
  | 'textmd'
  | 'textlg'
  | 'textxl'

export const textFontSizes: Record<ThemeTextFontSizes, string> = {
  textxs: '0.75rem', // 12px
  textsm: '0.875rem', // 14px
  textmd: '1rem', // 16px
  textlg: '1.25rem', // 20px
  textxl: '1.75rem', // 28px
}

export type ThemeHeadingFontSizes =
  | 'heading5'
  | 'heading4'
  | 'heading3'
  | 'heading2'
  | 'heading1'
  | 'display'

export const headingFontSizes: Record<ThemeHeadingFontSizes, string> = {
  heading5: '1.75rem', // 28px
  heading4: '2rem', // 32px
  heading3: '2.25rem', // 36px
  heading2: '2.625rem', // 42px
  heading1: '2.875rem', // 46px
  display: '3.75rem', // 52px
}
