/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#12171D",
        secendary: "#FFFF00",
        tsecendary: "#94A3B8",
      },
    },
  },
  plugins: [],
};
