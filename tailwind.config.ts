import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "88": "22rem", // 352px
      },
      colors: {
        "main-gray": "#726C6C",
        "sub-gray": "#D9D9D9",
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
      animation: {
        fadeIn: "fadeIn 0.15s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      backgroundImage: {
        "kakao-img": "url('/image/kakao.svg')",
        "google-img": "url('/image/google.svg')",
        "naver-img": "url('/image/naver.svg')",
      },
    },
    plugins: [],
  },
};
export default config;
