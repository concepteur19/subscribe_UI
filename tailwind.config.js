/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      transparent: 'transparent',
      primary: {
        0: '#4649E5',
        1: '#9799FF',
        2: '#9799FF40'
      },
      white: {
        0: '#BBBBC8',
        1: '#E4E4ED',
        2: '#ffffff'
      },
      black: {
        0: '#050511',
        1: '#0505110F',
        2: '#101019'    
      },
      red: '#FD3464'
    },
    fontFamily: {
      // sans: ['var(--font-segoui)', ...fontFamily.sans],
      redRose: ['RedRoseRegular', 'regular'],
      redRoseLight: ['RedRoseLight', 'light'],
      redRoseBold: ['RedRoseBold', 'bold'],
      russOne: ['RussoOne', 'regular']
    },
  },
  plugins: [require("tailwindcss-animate")],
}