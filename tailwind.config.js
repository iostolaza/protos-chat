/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f1f5f9', // slate-100
          200: '#e2e8f0',
          300: '#cbd5e1', // Lighter for messages
          400: '#94a3b8',
          500: '#64748b', // Default primary
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        border: '#E2E8F0',
        background: '#FFFFFF',
        foreground: '#0C1420',
        'muted-foreground': '#64748B',
        card: '#F1F5F9',
        'card-foreground': '#000000',
      },
    },
  },
  plugins: [],
};