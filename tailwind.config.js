/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sunset-orange": {
          DEFAULT: "#f94144",
          50: "#fff1f1",
          100: "#ffe0e1",
          200: "#ffc7c8",
          300: "#ffa0a2",
          400: "#ff696b",
          500: "#f94144",
          600: "#e61c1f",
          700: "#c21316",
          800: "#a01416",
          900: "#851719",
        },
        "aero-blue": {
          DEFAULT: "#00d48b",
          50: "#e9fff5",
          100: "#cbffe5",
          200: "#a5ffd6",
          300: "#5bfabc",
          400: "#1beca1",
          500: "#00d48b",
          600: "#00ad73",
          700: "#008a60",
          800: "#006d4d",
          900: "#005940",
        },
        "electric-violet": {
          DEFAULT: "#925df5",
          50: "#f6f3ff",
          100: "#eee9fe",
          200: "#dfd6fe",
          300: "#c7b5fd",
          400: "#ac8bfa",
          500: "#925df5",
          600: "#8338ec",
          700: "#7529d8",
          800: "#6222b5",
          900: "#521d95",
        },
      },

      fontFamily: {
        gotham: ["Gotham", "normal"],
      },
    },
  },
  plugins: [],
};
