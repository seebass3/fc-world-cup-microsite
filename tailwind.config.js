module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fcBlue: "#7a99ac",
        fcRed: "#e4002b",
        fcPurple: "#a41890",
      },
      height: {
        hero: "75vh",
      }
    },
    fontFamily: {
      regular: ['AmsiProNarw-Regular', 'serif'],
      bold: ['AmsiPro-Bold', 'serif'],
      ultra: ['AmsiProNarw-Ultra', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
