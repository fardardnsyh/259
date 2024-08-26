/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: [
          "Rubik",
          "ui-sans-serif",
          "system-ui",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
          "sans-serif",
        ],
      },
      colors: {
        "custom-gray": "#2c2c2c",
      },
      fontSize: {
        "2xl": [
          "2rem",
          {
            lineHeight: "0.9375",
          },
        ],
        "lg-mobile": "1.62rem",
        "search-form": "1.12rem",
        "info-heading": [
          "0.75rem",
          {
            letterSpacing: "0.15em",
          },
        ],
        "info-heading-mobile": [
          "0.62rem",
          {
            letterSpacing: "0.15em",
          },
        ],
        info: "1.62rem",
        "info-mobile": "1.25rem",
      },
      backgroundImage: {
        mobile: "url('/pattern-bg-mobile.png')",
        desktop: "url('/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
