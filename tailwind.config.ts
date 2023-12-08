import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-color': '#222E50',
        'main-light': '#C1D3FE',
        'yellow-color': '#fbc846',
      },
      // backgroundColor: {
      //   'main-color': '#222E50',
      //   'main-light': '#C1D3FE',
      // },
      textColor: {
        'main-color': '#222E50',
        'yellow-color': '#fbc846',
      },
      fontSize: {
        'xs': '0.5rem'
      },
      
    },
  },
  plugins: [],
}
export default config
