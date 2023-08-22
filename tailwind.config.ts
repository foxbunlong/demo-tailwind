import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    // After add custom colors, you will lose all pre-defined Tailwind colors
    // colors: {
    //   primary: '#0070f3',
    // },
    extend: {
      colors: {
        primary: {
          100: '#0070f3',
          932: '#012247',
        },
      },
    },
  },
  plugins: [],
};
export default config;
