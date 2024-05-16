/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
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
    // backgroundImage: {
    //   profileBg: "url('src/assets/images/png/ProfileBg.png')",
    // }
  },
  plugins: [],
}         

