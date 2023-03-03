module.exports = {
  corePlugins: { preflight: false, container: false },

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{js,jsx,ts,tsx}",
    "./blog/**/*.{js,jsx,ts,tsx,md}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      lobster: ["Lobster", "cursive"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
