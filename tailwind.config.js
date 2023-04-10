/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
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
