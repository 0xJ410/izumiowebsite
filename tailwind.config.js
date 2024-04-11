/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    screens: {
      'sm' : '320px',
      'lg' : '960px'
    },
    backgroundImage : {
      'sea' : "url('/img/background.png')"
    },
    fontFamily: {
      poppins : "poppins",
      vollkorn : "vollkorn",
      josefin : "josefin"
    },
    colors: {
      blue : "#016FB4",
      gray : "#C0C8D2",
      green : "#86D34A"
    },
    padding: {
      r05: "0.5rem",
      r1: "1rem",
      r3: "3rem",
      r5 : "5rem",
      r10 : "10rem"
    }
  },
  plugins: [],
}

