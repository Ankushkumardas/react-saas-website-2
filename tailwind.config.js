/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:"10px",
        md:"20px",
        lg:"10px",
      },
      screens:{
        sm:"375px",
        md:"768px",
        lg:"1200px",
      },
    },
    screens:{
      sm:"375px",
      md:"768px",
      lg:"1200px",
    },
    extend: {
      colors:{},
    },
  },
  plugins: [],
}