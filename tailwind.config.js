/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C2541",
        secondary: "#0B132B ",
        tertiary: "#6F73D2 ",
        quaternary: "#5BC0BE"
        
      },
    },
  },
  plugins: [],
}