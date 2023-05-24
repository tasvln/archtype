import colors from '@/utils/colors';
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const stitches = createStitches({
  theme: {
    colors: {
      black: '#000',
      black0: colors.black[0],
      black1: colors.black[1],
      black2: colors.black[2],
      black3: colors.black[3],
      black4: colors.black[4],
      black5: colors.black[5],
      black10: colors.black[10],
      black15: colors.black[15],
      black20: colors.black[20],
      black25: colors.black[25],
      black30: colors.black[30],
      black35: colors.black[35],
      black40: colors.black[40],
      black45: colors.black[45],
      black50: colors.black[50],
      black60: colors.black[60],
      black70: colors.black[70],
      black80: colors.black[80],
      black90: colors.black[90],
      black100: colors.black[100],

      white: '#fff',
      white0: colors.white[0],
      white1: colors.white[1],
      white2: colors.white[2],
      white3: colors.white[3],
      white4: colors.white[4],
      white5: colors.white[5],
      white10: colors.white[10],
      white15: colors.white[15],
      white20: colors.white[20],
      white25: colors.white[25],
      white30: colors.white[30],
      white35: colors.white[35],
      white40: colors.white[40],
      white45: colors.white[45],
      white50: colors.white[50],
      white60: colors.white[60],
      white70: colors.white[70],
      white80: colors.white[80],
      white90: colors.white[90],
      white100: colors.white[100],
      
      primaryBlack: '#171717',
      lightBlack: '#262626',
      primary: '#6366f1',
      grey: '#737373',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      ultraBold: 800,
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
  },
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    xl: '(max-width: 1024px)',
    xxl: '(max-width: 1280px)',
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    truncate: (value: boolean) => {
      if (value !== true) return {}

      return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
    },
    marginX: (value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  prefix: 'tas-',
});

export type CSS = Stitches.CSS<typeof config>

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = stitches