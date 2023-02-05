module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'xs': '320px',
      'md': '768px',
      'xmd': '600px',
      'lg': '1080px',
      'xl': '1280px',
    }
  },
  plugins: [],
}