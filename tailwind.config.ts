import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          600: '#525252',
          900: '#171717',
        },
      },
      maxWidth: {
        content: '1120px',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        card: '0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.08)',
        cardHover: '0 12px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.06)',
        button: '0 2px 8px rgba(37, 99, 235, 0.25)',
        buttonHover: '0 4px 14px rgba(37, 99, 235, 0.35)',
      },
    },
  },
  plugins: [],
}
export default config
