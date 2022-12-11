/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "chatGPT-bottom":
          "linear-gradient(180deg,rgba(53,55,64,0),#353740 58.85%);",
      },
    },
  },
  plugins: [],
};
