import { Svg, SvgProps } from './Svg'

export type IconProps = Omit<SvgProps, 'children'>

export const X = ({ vibe, size, background }: IconProps) => (
  <Svg vibe={vibe} size={size} background={background}>
    <path d="M18 6L6 18M6 6L18 18" />
  </Svg>
)
