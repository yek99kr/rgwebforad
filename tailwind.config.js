module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // prettier-ignore
        "4xs": {'min': '200px', 'max': '300px'},
        // prettier-ignore
        "3xs": {'min': '300px', 'max': '370px'},
        // prettier-ignore
        "2xs": {'min': '370px', 'max': '460px'},
        // prettier-ignore
        'xs': {'min': '460px', 'max': '640px'},
      },
    },
  },
  plugins: [],
};
