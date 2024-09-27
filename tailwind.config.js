/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    
    extend: {
      scrollbar: ["rounded"],
      padding: {
        'custom': '.5px', // Replace '20px' with your desired padding value
      },
      colors: {   
        customgrey:"#666666",
        customgreen:"#53B0AA",
        customtransgreen:"#5CBDB7"

      } 
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
});