/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xxs: ['10px', '11px'],
      xs: ['12px', '13px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      },
    },
  },
  plugins: [],
};
