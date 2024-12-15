const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
        accent: "",
        foreground: "",
      },
      fontFamily: {
        heading: ['"Red Hat Display"', "serif"],
        body: ['"Plus Jakarta Sans"', "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
