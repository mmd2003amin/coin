/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "vazirMedium" : "vazirMedium",
      "vazirBold" : "vazirBold",
      "vazirExtraBold" : "vazirExtraBold",
      "vazirRegular" : "vazirRegular",
    },
    extend: {
      animation: {
        borderItemsNavbar : 'borderItemsNavbar .2s linear 1'
      },

      keyframes: {
        borderItemsNavbar : {
          "0%" :{width : "0px"},
          "100%" :{width : "90px"}
        }
      },

      boxShadow : {
        shadowItemsNavbar : "3px 4px 30px 3px rgba(24,3,255,0.5)"
      },

      screens : {
        "1120" : "1120px",
        "500" : "500px"
      }
    },
  },
  plugins: [],
};
