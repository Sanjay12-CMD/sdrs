/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#8B0000",
          gold: "#FFD700",
          "gold-light": "#FFFACD",
          "gold-dark": "#B8860B",
          dark: "#0A0A0A",
          surface: "#1A1A1A",
        },
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Poppins'", "sans-serif"],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)',
        'dark-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)',
      },
    },
  },
  plugins: [],
}
