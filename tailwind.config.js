import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#ff8c00",
        light: "#ffa94d",
        dark: "#cc6e00",
      },
    },
  },
  plugins: [daisyui],
};
