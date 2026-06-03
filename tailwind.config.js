/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bark: "#3d2818",
        cream: "#f5ede0",
        terracotta: "#b8623e",
        wheat: "#d4a574",
        ember: "#7a3a1f",
        crust: "#5a3520",
        flour: "#faf5ec",
      },
      fontFamily: {
        display: ["Fraunces", "Lora", "Georgia", "serif"],
        serif: ["Lora", "Source Serif Pro", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
