import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#2ECC71",
        light: "#A3FFC4",
        dark: "#1E8B4F",
      },
    },
  },
  plugins: [daisyui],
};
