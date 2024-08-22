/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // primary: "#12171D",
                primary: "#11161E",
                secondary: "#19E684",
                // textColor: "#94A3B8",
                textColor: "#fff",
                buttonColor: "#19E684",
            },
            fontFamily: {
                saira: ['"Saira"', "sans-serif"],
                syne: ['"Syne"', "sans-serif"],
                poppins: ['"Poppins"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
