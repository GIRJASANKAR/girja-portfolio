import colors from './constants/colors';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  media: false,
  important: false,
  theme: {
    screens: {
      lg: { max: '1280px' },
      md: { max: '1100px' },
      sm: { max: '768px' },
      xs: { max: '350px' },
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   primary: colors.primary,
    //   secondary: colors.secondary,
    //   framework: colors.framework,
    //   status: colors.status,
    //   alert: colors.alert,
    //   background: colors.background,
    //   foreground: 'var(--foreground)',
    // },
    fontFamily: {
      primary: 'Rethink Sans',
      secondary: 'Inter',
    },
    extend: {
      fontSize: {
        'text-xxs': ['0.625rem', { lineHeight: '0.75rem' }],
        'heading-1': ['2rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        'heading-2': ['1.5rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        'heading-3': ['1.25rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        'heading-4': ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        'heading-5': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        'heading-6': ['0.75rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        para: ['1rem', { lineHeight: '1.25rem', fontFamily: 'Inter' }],
        'para-2': ['0.875rem', { lineHeight: '1.25rem', fontFamily: 'Inter' }],
        'para-3': ['0.75rem', { lineHeight: '1.25rem', fontFamily: 'Inter' }],
      },
      fontWeight: {
        para: 400,
        'para-medium': 500,
        'para-semi': 600,
        'para-bold': 700,
      },
      backgroundColor: {
        default: colors.background,
      },
      textColor: {
        default: colors.text,
      },
      placeholderColor: {
        default: colors.text,
      },
      borderColor: {
        default: colors.border,
      },
      divideColor: {
        default: colors.border,
      },
      ringColor: {
        default: colors.border,
      },
      ringOffsetColor: {
        default: colors.border,
      },
      extendedSpacing: {
        13: '3.25rem',
        15: '3.75rem',
        50: '12.5rem',
        100: '25rem',
      },
      lineHeight: {
        0: '0rem',
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4rem',
        20: '5rem',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.320, 1)',
      },
      height: (theme) => ({
        ...theme('extendedSpacing'),
      }),
      width: (theme) => ({
        ...theme('extendedSpacing'),
      }),
      minWidth: (theme) => ({
        screen: '100vw',
        ...theme('spacing'),
        ...theme('extendedSpacing'),
      }),
      maxWidth: (theme) => ({
        screen: '100vw',
        ...theme('spacing'),
        ...theme('extendedSpacing'),
      }),
      minHeight: (theme) => ({
        screen: '100vh',
        ...theme('spacing'),
        ...theme('extendedSpacing'),
      }),
      maxHeight: (theme) => ({
        screen: '100vh',
        ...theme('spacing'),
        ...theme('extendedSpacing'),
      }),
      zIndex: {
        '-1': -1,
        max: 99999999999,
      },
      boxShadow: {
        DEFAULT: '0 5px 15px 0 rgb(0 0 0 / 10%)',
        purple: '0 0 0 5px #EFEDF9',
      },
      order: {
        1: '1',
        2: '2',
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
      transitionDuration: ['hover', 'focus'],
      backgroundColor: ['even', 'odd'],
      textAlign: ['important', 'first', 'last'],
      display: ['group-hover', 'important', 'hover'],
      borderColor: ['important'],
      maxWidth: ['important'],
      maxHeight: ['important'],
      minWidth: ['important'],
      minHeight: ['important'],
      width: ['important'],
      height: ['important'],
      padding: ['important', 'last'],
      margin: ['important', 'last'],
      backgroundOpacity: ['even', 'odd'],
      fontSize: ['important'],
      fontWeight: ['important'],
      borderRadius: ['first', 'last'],
      borderWidth: ['first', 'last'],
      textColor: ['important'],
    },
  },
  plugins: [],
};
