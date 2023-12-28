/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        small: "12px",
        medium: "16px",
        large: "20px",
        heading: "24px",
      },
      colors: {
        primaryWhite: "#FEFBF6",
        primaryBlack: "#323232",
      },
      fontFamily: {
        primary: "General Sans, sans-serif",
        secondary: "Cabinet Grotesk, sans-serif",
      },
      backgroundColor: {
        primaryWhite: "#FEFBF6",
        primaryBlack: "#323232",
      },
    },
  },
  plugins: [],
};
