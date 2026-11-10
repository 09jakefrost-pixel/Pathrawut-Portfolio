/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#05070e',
          surface: '#0f172a',
          card: 'rgba(15, 23, 42, 0.65)',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        network: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          glow: 'rgba(6, 182, 212, 0.15)',
        },
        pm: {
          emerald: '#10b981',
          indigo: '#6366f1',
          glow: 'rgba(16, 185, 129, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glass-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-glow-network': '0 0 25px -5px rgba(6, 182, 212, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
        'glass-glow-pm': '0 0 25px -5px rgba(16, 185, 129, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
