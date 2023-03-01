module.exports = {
  corePlugins: { preflight: false, container: false },

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      lobster: ["Lobster", "cursive"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
