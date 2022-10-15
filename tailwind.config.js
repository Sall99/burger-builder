/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
        },
        gray: {
          100: "var(--color-gray-100)",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        xs: "0.2rem",
        sm: "0.4rem",
        md: "0.6rem",
        lg: "0.8rem",
        xl: "1rem",
        "2xl": "1.2rem",
      },
    },
  },
  plugins: [],
};
