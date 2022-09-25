/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    colors: {
      pc1: "hsl(176, 72%, 28%)",
      pc2: "hsl(176, 50%, 47%)",
      nc1: "hsl(0, 0%, 48%)",
      nc2: "hsl(0, 0%, 0%)",
      white: "hsl(0, 0%, 100%)",
      transparent: "transparent",
      "bm-grey": "hsl(0, 0%, 69%)",
    },
    fontFamily: {
      sans: ["Commissioner", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    maxWidth: {
      mobile: "20.4375rem",
      tablet: "33.75rem",
      desktop: "45.5rem",
      "nav-bar": "69.375rem",
    },
    minWidth: {
      mobile: "20.4375rem",
      tablet: "33.75rem",
      desktop: "45.5rem",
      "nav-bar": "69.375rem",
    },

    extend: {
      padding: {
        sm: "1.375rem",
      },
    },
  },
  plugins: [],
};
