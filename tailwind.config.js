module.exports = {
  purge: [ 
  './src/**/*.js',
  './src/**/*.jsx',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fcBlue: "#7a99ac",
        fcRed: "#e4002b",
        fcPurple: "#a41890",
        fcOrange: "#da7b3b",
        fisBlue: "#081a92",
        fisYellow: "#f0ab00",
        rodeoGold: "#c7ab81",
      },
      height: {
        hero: "75vh",
        half: "50vh",
      }
    },
    fontFamily: {
      regular: ['AmsiProNarw-Regular', 'serif'],
      bold: ['AmsiPro-Bold', 'serif'],
      ultra: ['AmsiProNarw-Ultra', 'serif'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
