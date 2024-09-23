/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        footer_bg: "#0D5986",
        platinum: "#EAEAEA",
      },
    },
    screens: {
      sm: { max: "767px" },
      md: { min: "768px", max: "1024px" },
      lg: { min: "1025px", max: "1372px" },
      xl: { min: "1373px" },
    },
  },
  plugins: [],
};
