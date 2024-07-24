/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["PT Sans Narrow", "sans-serif"],
    },
    screens : {
        sm: '480px',
        md : '768px',
        lg : '976px',
        xl : '1440px',
    },
    extend: {
      colors : {
        bgColor: '#C9B6A4',
        bgLight :'#FEF3E6',
        bgSection: '#242424',
        bgSmall : '#FDF4E6',
        bgBlack : "#252525",
        bgButton : '#242424',
        textBlack : '#242424',
        textWhite : '#fff',
        grayColor : '#7E7D7E',
        tomatoColor: '#CC934E',
        checkColor : '#6950f3',
        lightGray: "#EAD7B2",
        
      }, 
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [ require('@tailwindcss/forms')],
};
