/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        dark: "#915EFF",
        darkbg: "#000000",
        day: "#31014f",
        daybg: "#ffffff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "250px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "sky-background": "url('/src/assets/background1.jpg')",
        "black-green": "url('/src/assets/black-green.jpg')",
        orange: "url('/src/assets/orange2.png')",
        gurple: "url('/src/assets/gurple.png')",
        movieRent: "url('/src/assets/movieRent.gif')",
        rentStatic: "url('/src/assets/rent-static.png')",
        sudokuSolver: "url('/src/assets/sudoku.gif')",
        sudokuStatic: "url('/src/assets/sudoku-static.png')",
        onlineStoreFlask: "url('/src/assets/online-store-flask.gif')",
        flaskStatic: "url('/src/assets/flask-store-static.png')",
        stackGame: "url('/src/assets/stackGame.gif')",
        stackStatic: "url('/src/assets/stack-static.png')",
        scanAway: "url('/src/assets/ScanAway.gif')",
        scanStatic: "url('/src/assets/scan-static.png')",
      },
    },
  },
  plugins: [],
};
