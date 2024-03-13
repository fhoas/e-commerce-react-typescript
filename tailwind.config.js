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
        primary: "Cabinet Grotesk, sans-serif"
      },
      colors: {
        gray9: "#1f1f1f",
        gray8: "#252525",
        gray6: "#666",
        gray5: "#999",
        deepPurple3: "#190061",
        deepPurple2: "#240090",
        deepPurple1: "#3500d3",
        deepPurple0: "#4200FE",
        deepBlack: "#282828",
        deepWhite: "#9BA3AF",
      },
      backgroundColor: {
        gray9: "#1f1f1f",
        gray8: "#252525",
        gray6: "#666",
        gray5: "#999",
        deepPurple3: "#190061",
        deepPurple2: "#240090",
        deepPurple1: "#3500d3",
        deepPurple0: "#4200FE",
        deepBlack: "#282828",
        deepWhite: "#9BA3AF",
      },
    },
  },
  plugins: [],
};
