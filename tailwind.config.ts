import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#E7D7FF',
        'baby-blue': '#D9EFFF',
        mint: '#DFFFEA',
        peach: '#FFD9C2',
        blush: '#FFE7EF',
        sky: '#CFF3FF',
        'soft-gray': '#F2F5F8',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft-pastel': '0 10px 30px rgba(231, 215, 255, 0.35), 0 6px 20px rgba(217, 239, 255, 0.25)',
      },
      backgroundImage: {
        'pastel-gradient':
          'radial-gradient(1200px 600px at 10% 10%, rgba(231,215,255,0.50), transparent 60%), radial-gradient(1200px 600px at 90% 20%, rgba(217,239,255,0.45), transparent 60%), radial-gradient(1200px 800px at 30% 80%, rgba(255,231,239,0.45), transparent 60%)',
      },
      backdropBlur: {
        xl: '24px',
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
