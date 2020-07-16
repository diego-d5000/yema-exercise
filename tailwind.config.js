module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  theme: {
    extend: {
      spacing: {
        '169': '56.25%',
        'full': '100%',
        '2/3': '66.666667%',
        '3/4': '75%'
      },
    }
  }
}