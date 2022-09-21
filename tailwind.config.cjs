/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.tsx',
      './index.html'
  ],
  theme: {
    fontFamily: {
      sans:['Inter', 'sans-serif']
    },
    extend: {

      backgroundImage: {
        background: "url('background.png')",
        'gradient-created': 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 122, 184, 1) 67.08%)',
      },
    },
  },
  plugins: [],
}
