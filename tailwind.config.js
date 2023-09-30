/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      // Kế thừa và custom lại element
      colors: {
        'regal-blue': '#243c5a',
        ' organe-max': '#ff4a01',
        'organe-1': '#ff8b00',
        'green-default': '#396c03',
        'bg-default': 'rgba(107, 145, 66, 0.2)',
        'green-light ': '#d8d92e',
        'gray-light-3': '#676767',
        'gray-light-2': '#525252',
        'gray-light-1': '#838383',
        'gray-light-0': 'rgba(255, 255, 255, 0.58)',
      'Black-basic': '#3F3F3F',
      'white': '#fff',
         'bg-yellow-0': '#FFF9F2'
      },
      fontSize: {
        '65': '50px',
        '21': '21px',
        'defaulf': '18px'
     },
     fontFamily: {
       'Merienda': ['Merienda', 'cursive'],
       'Poppins': ['Poppins', 'sans-serif'],
     },
     lineHeight: {
      '28': '28px',
       '52': '52',
       '36': '38'
    },
    width: {
      '30': '30%',
      '70': '70%',
      '60': '60%',
      '80': '80%',
    },
    backgroundImage: {
      'hero-pattern': "url('../assets/image/bgr_full.png')",
      'getApp': "url('../assets/image/foodTime.png')",
    },
    screens: {
      'xs': {'min': '320px', 'max': '640px'},
      'xss': {'min': '640px', 'max': '2000px'},
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    },
  },

  

  plugins: [],
}

