/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pembe: "#E92577",
        gri: "#777",
        blackish: "#0A0A14",
        "light-grey": "#D9D9D9",
        "bg-gri": "#F4F4F4",
        "dark-grey": "#2A262B",
        "bg-dark-grey": "#484148",
      },
    },
  },
  plugins: [],
};
