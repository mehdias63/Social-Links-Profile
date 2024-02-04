/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {
      colors: {
        "black": "#141414",
        "dark-gray":"#1F1F1F",
        "gray":"#333333",
        "orange":"#FC7614",
      },
    },
  },
  plugins: [],
};
