/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
            "./components/ui/**/*.{js,ts,jsx,tsx}" // Add this line
      ],
      theme: {
            extend: {},
      },
      plugins: [],
};