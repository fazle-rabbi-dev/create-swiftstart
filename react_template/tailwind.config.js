/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash-display-medium': ['ClashDisplay-Medium', 'sans'],
        'supreme-regular': ['Supreme-Regular', 'sans'],
        'satoshi-medium': ['Satoshi-Medium', 'sans'],
      }
    },
  },
  plugins: [],
}
