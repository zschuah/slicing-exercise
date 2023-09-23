/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "show-overlay": "enterLeft 500ms forwards",
        "hide-overlay": "exitLeft 500ms forwards",
      },
      keyframes: {
        enterLeft: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "1%": { opacity: 0, transform: "translateX(0)" },
          "100%": { opacity: 0.5, transform: "translateX(0)" },
        },
        exitLeft: {
          "0%": { opacity: 0.5, transform: "translateX(0)" },
          "99%": { opacity: 0, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
