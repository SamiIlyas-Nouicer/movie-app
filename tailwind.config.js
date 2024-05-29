/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {colors: {
      'woody-brown': {
        '50': '#f8f4f4',
        '100': '#efe6e5',
        '200': '#ddcccb',
        '300': '#c8aaa9',
        '400': '#b08789',
        '500': '#a06f72',
        '600': '#93636a',
        '700': '#7b535a',
        '800': '#65474d',
        '900': '#402e32',
        '950': '#2c1e22',// main
      },
      'peach-orange': {
        '50': '#fff6ed',
        '100': '#ffead5',
        '200': '#ffc48f',// main
        '300': '#ffb172',
        '400': '#fd863a',
        '500': '#fc6413',
        '600': '#ed4909',
        '700': '#c4340a',
        '800': '#9c2a10',
        '900': '#7d2511',
        '950': '#441006',
    },

    'salmon': {
      '50': '#fff4f1',
      '100': '#ffe7e1',
      '200': '#ffd3c7',
      '300': '#ffb4a0',
      '400': '#ff8766',// main
      '500': '#f8643b',
      '600': '#e5481d',
      '700': '#c13914',
      '800': '#a03214',
      '900': '#842f18',
      '950': '#481507',
  },
  
    
    },},
  },
  plugins: [],
};
