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
        deepPurple3: "#190061",
        deepPurple2: "#240090",
        deepPurple1: "#3500d3",
        deepPurple0: "#4200FE",
        deepBlack: "#282828",
      },
      backgroundColor: {
        deepPurple3: "#190061",
        deepPurple2: "#240090",
        deepPurple1: "#3500d3",
        deepPurple0: "#4200FE",
        deepBlack: "#282828",
      },
    },
  },
  plugins: [],
};
