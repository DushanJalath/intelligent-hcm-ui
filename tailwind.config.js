/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter",
      },
      colors: {
        red: {
          600: null, // Remove the red-600 color
        },
      },
    },
  },
  plugins: [],
};
