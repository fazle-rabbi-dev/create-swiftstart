/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          "satoshi-medium": ["Satoshi-Medium", "sans"],
          inter: ['Inter', 'sans-serif'],
      },
      colors: {
        purple: {
          50: "#e1c7fc",
          60: "#b492fb",
          70: "#a841ff",
        },
        orange: {
          50: "#fce0c7",
          60: "#ffc189",
          70: "#ff983b",
        },
        gray: {
          50: "#dedede",
          60: "#afafaf",
          70: "#8a8a8a",
        }
      },
      backgroundImage: {
        // banner: "url('')",
      },
    }
  }
};