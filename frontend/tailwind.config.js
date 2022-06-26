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
        "stage-color-1": "#e63232",
        "stage-color-2": "#f3722c",
        "stage-color-3": "#f8961e",
        "stage-color-4": "#FFC71F",
        "stage-color-5": "#7fc96b",
        "stage-color-6": "#43aa8b",
        "stage-color-7": "#277da1",
        "stage-color-8": "#3b498e",
        "stage-color-9": "#66418a",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      backgroundImage: {
        waves: "url('/waves.svg')",
      },
    },
  },
  plugins: [],
};
