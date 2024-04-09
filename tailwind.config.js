/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      green: '#1C6E45',
      red: {
        0: '#C90000',
        1: '#FF3737',
        2: '#FF3131'
      },
      white: {
        0: '#FFFFFF',
        1: '#FFFFFF00',
        2: '#FFFFFFCF',
        3: '#FFFEFE00',
        4: '#FFFFFF80',
        5: '#FDFDFF',
        6: '#F4F4FB'
      },
      grey: {
        0: '#0000001C',
        1: '#00000036',
        2: '#00000026',
        3: '#959494',
        4: '#414141',
        5: '#757575',
        6: '#707070',
        7: '#A7A6A6',
        8: '#CBCBCB',
        9: '#343434',
        10: '#A7A7A7',
        11: '#70707080',
        12: '#4E4E4E',
        13: '#888888',
        14: '#878787',
        15: '#4E4E4E38',
        16: '#4E4E4E3A'

      },
      primary: {
        0: '#EEEEFF',
        1: '#C8C8FF',
        2: '#313180',
        3: '#6262A8',
        4: '#4444AB',
        5: '#31318029',
        6: '#ECECFB',
        7: '#31318069',
        8: '#31318038',
        9: '#31318063',
        10: '#A180D2'
      },
      pink: {
        0: '#D2ABFF'
      },
      black: {
        0: '#050511',   
      }
    },
    fontFamily: {
      // sans: ['var(--font-segoui)', ...fontFamily.sans],
      redRose: ['RedRoseRegular', 'regular'],
      redRoseLight: ['RedRoseLight', 'light'],
      redRoseBold: ['RedRoseBold', 'bold'],
      russOne: ['RussoOne', 'regular']
    },
  },
  plugins: [],
}         

