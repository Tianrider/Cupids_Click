/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         animation: {
            ping: "ping 1s linear infinite",
         },
         fontFamily: {
            Cormorant: ["Cormorant Garamond", "serif"],
         },
      },
   },
   plugins: [],
};
