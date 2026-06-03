/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        ivory: "rgb(var(--color-ivory) / <alpha-value>)",
        umber: "rgb(var(--color-umber) / <alpha-value>)",
        sage: "rgb(var(--color-sage) / <alpha-value>)",
        leaf: "rgb(var(--color-leaf) / <alpha-value>)",
        oat: "rgb(var(--color-oat) / <alpha-value>)",
        butter: "rgb(var(--color-butter) / <alpha-value>)",
        // legacy aliases kept for safety in case anything stray references them
        bark: "rgb(var(--color-ink) / <alpha-value>)",
        cream: "rgb(var(--color-ivory) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        serif: ["var(--font-serif)"],
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
