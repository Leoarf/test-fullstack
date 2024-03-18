import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customGray: '#333333',
        customTextUser: '#737A82',
        customTitlePanel: '#3E3E3E',
      },
      maxWidth: {
        '270': '270px',
      },
      width: {
        '138': '138px',
      },
    },
  },
  plugins: [],
};
export default config;
