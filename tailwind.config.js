/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xss: "320px",
      xs: "375px",
      ...defaultTheme.screens,
    },
    colors: {
      green: "hsl(75, 94%, 57%)",
      black: "hsl(0, 0%, 8%)",
      grey: "hsl(0, 0%, 20%)",
      darkGrey: "hsl(0, 0%, 12%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
