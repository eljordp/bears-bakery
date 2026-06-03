/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2b1d12",
        ivory: "#f4ecdb",
        umber: "#8b4a2e",
        // legacy aliases kept for safety in case anything stray references them
        bark: "#2b1d12",
        cream: "#f4ecdb",
      },
      fontFamily: {
        display: ['"DM Serif Display"', '"EB Garamond"', "Georgia", "serif"],
        serif: ['"EB Garamond"', '"Source Serif Pro"', "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      maxWidth: {
        zine: "62rem",
      },
    },
  },
  plugins: [],
};
