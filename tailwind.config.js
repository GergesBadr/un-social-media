/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0e141b",
        "custom-yellow": "#ffe100",
      },
      fontFamily: {
        poppins: "Poppins, 'sans-serif'",
        merienda: "Merienda, cursive",
      },
    },
  },
  plugins: [],
};
