import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "brand" : "var(--font-merienda)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        handle : "var(--handle)",
        brand : {
          50 : "#fff3f1",
          100 : "#ffe4df",
          200 : "#ffcec5",
          300 : "#ffac9c",
          400 : "#ff7b63",
          500 : "#ff5232",
          600 : "#ef3816",
          700 : "#c92a0c",
          800 : "#a6260e",
          900 : "#4b0f04"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
