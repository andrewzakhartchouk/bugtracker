module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,html,tsx}",
    "./src/components/**/*.{js,jsx,html,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-green": "#1B4332",
        "nav-green": "#081C15",
        "main-green": "#52B788",
        "panel-green": "#F1F3F4",
        "high-green": "#74C69D",
        "low-green": "#40916C",
        "main-red": "#B75252",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
