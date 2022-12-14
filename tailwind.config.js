/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      purple: "#3f3cbb",
      midnight: "#121063",
      cyan: "hsl(193, 38%, 86%)",
      green: "hsl(150, 100%, 66%)",
      grayBlue: "hsl(217, 19%, 38%)",
      darkGrayishBlue: "hsl(217, 19%, 24%)",
      darkBlue: "hsl(218, 23%, 16%)",
    },

    fontFamily: {
      melody: ["Hi Melody", "cursive"],
      inter: ["Inter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      lg: "1024px",
      xl: "1440px",
      sm: "375px",
      xs: "360px",
      md: "820px",
    },
    extend: {},
  },
  plugins: [],
};
