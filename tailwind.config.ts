import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
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
