module.exports = {
  mode: "jit",
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        thumbnail1: "url('../src/assets/1.jpg')",
      },
      fontFamily: {
        roboto: ["Roboto"],
        oswald: ["Oswald"],
      },
      colors: {
        primary: "#FFDF6B",
        secondary: "#0C0D13",
        tersiary: "#252839",
        text: "#FFFFFF",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
