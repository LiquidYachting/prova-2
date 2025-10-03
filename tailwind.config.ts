import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0C2A4A',
        turquoise: '#0FB5B3',
        pearl: '#F5F7FA',
        graphite: '#2B2F36'
      }
    },
    fontFamily: {
      serif: ['Cinzel', 'serif'],
      sans: ['Inter', 'system-ui', 'sans-serif']
    }
  },
  plugins: []
}
export default config
