/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        GMprimary: '#130F53',
        GMsecondary: "#0B132B",
        GMtertiary: "#6F73D2",
        GMquaternary: "#5BC0BE"
        
      },
    },
  },
  plugins: [],
}