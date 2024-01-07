import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#121420',
      gray: '#403F4C',
      'light-black': '#2C2B3C',
      'dark-gray': '#1B2432',
      'dark-black': '#0F100D',
      'red-light': '#B76D68',
      red: '#A01D1E',
      light: '#F9F7F3',
      purple: '#7F77EA',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      fontSize: {
        sm: '12px',
        base: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
      },
    },
  },
  plugins: [],
};
export default config;
