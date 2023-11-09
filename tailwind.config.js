/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: "var(--primary)",
        'secondary': "var(--secondary)",
        'tertiary': "var(--tertiary)",
        'lightBlue': '#E8F2F8',
        'whiteTone': '#F9F9F9',
        'grayToneStroke': '#B8BFCC',
        'grayTone1': '#3C404B',
        'grayTone2': '#6C768A',
        'grayTone3': '#A0ABC0',
        'textDarkTone': '#23252F',
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
  },

  plugins: [],
};
