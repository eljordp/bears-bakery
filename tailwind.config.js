/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2b1d12",
        ivory: "#f7f0e3",
        umber: "#8b4a2e",
        sage: "#6f7d5d",
        leaf: "#46513d",
        oat: "#ead8b6",
        butter: "#c99a46",
        // legacy aliases kept for safety in case anything stray references them
        bark: "#2b1d12",
        cream: "#f7f0e3",
      },
      fontFamily: {
        display: ['"DM Serif Display"', '"EB Garamond"', "Georgia", "serif"],
        serif: ['"EB Garamond"', '"Source Serif Pro"', "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "0em",
      },
      maxWidth: {
        zine: "62rem",
      },
    },
  },
  plugins: [],
};
