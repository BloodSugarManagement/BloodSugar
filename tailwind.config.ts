import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-gray": "#726C6C",
        "sub-gray": "#D9D9D9",
        "selected-yellow": "#F5C045",
        "main-red": "#F65C5C",
      },
      fontSize: {
        xs: [
          "12px",
          {
            lineHeight: "18px",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "22px",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "22px",
          },
        ],
        lg: [
          "20px",
          {
            lineHeight: "24px",
          },
        ],
        xl: [
          "32px",
          {
            lineHeight: "40px",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
