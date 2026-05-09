/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#fafafa',  // page background
          900: '#f4f4f5',  // secondary surface
          800: '#ffffff',  // card / elevated
          700: '#e4e4e7',  // border
          600: '#a1a1aa',  // disabled / very muted
          500: '#71717a',  // muted text
          400: '#52525b',  // secondary text
          300: '#3f3f46',  // prominent text
          200: '#27272a',  // strong text
          100: '#09090b',  // headings / primary
        },
        gold: {
          DEFAULT: '#2563eb',  // blue-600 – primary accent
          dim: '#1d4ed8',      // blue-700 – hover / darker
          bright: '#60a5fa',   // blue-400 – light accent
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: ({ theme }) => ({
        ink: {
          css: {
            '--tw-prose-body': theme('colors.ink[400]'),
            '--tw-prose-headings': theme('colors.ink[100]'),
            '--tw-prose-lead': theme('colors.ink[400]'),
            '--tw-prose-links': theme('colors.gold.DEFAULT'),
            '--tw-prose-bold': theme('colors.ink[100]'),
            '--tw-prose-counters': theme('colors.ink[500]'),
            '--tw-prose-bullets': theme('colors.ink[500]'),
            '--tw-prose-hr': theme('colors.ink[700]'),
            '--tw-prose-quotes': theme('colors.ink[200]'),
            '--tw-prose-quote-borders': theme('colors.gold.DEFAULT'),
            '--tw-prose-captions': theme('colors.ink[500]'),
            '--tw-prose-code': theme('colors.gold.dim'),
            '--tw-prose-pre-code': theme('colors.ink[100]'),
            '--tw-prose-pre-bg': theme('colors.ink[900]'),
            '--tw-prose-th-borders': theme('colors.ink[700]'),
            '--tw-prose-td-borders': theme('colors.ink[900]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
