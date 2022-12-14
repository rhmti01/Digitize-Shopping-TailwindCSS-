/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["iransansdn"],
      },
      container: {
        center: true,
      },
      screens: {
        'xx': ' 200px ',
        'sx': ' 333px ',
        'ss': ' 555px ',
        '3xl': '1850px',
        '4xl': '1921px',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
}