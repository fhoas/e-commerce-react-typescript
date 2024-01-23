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
      fontFamily: {
        primary: "General Sans, sans-serif",
        secondary: "Cabinet Grotesk, sans-serif",
      },
      colors: {
        primary: "#d4a373",
        secondary: "#d5bdaf",
      },
      backgroundColor: {
        primary: "#edede9",
        secondary: "#d6ccc2",
      },
    },
  },
  plugins: [],
};
