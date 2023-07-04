/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(18rem, 1fr))",
      },
      minHeight: {
        "1/2": "50%",
      },
      cardFormat: {
        width: "450px",
        height: "480px",
        padding: "40px 20px",
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.452)",
        borderRadius: "15px",
        border: "2px solid yellow",
      },
    },
    screens: {
      s: "320px",
      m: "375px",
      l: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2400px",
    },
  },
  plugins: [],
  plugins: [require("daisyui")],
};
