/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        wide: "2500px",
      },
      colors: {
        primary: "#1D1A1A",
        textColor: "#F2ECEC",
        project: "#0D0D0C",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        playfair: ["var(--font-playfair)"],
      },
      padding: {
        projectHeaderPadding: "clamp(0.8rem, 10vw - 2rem, 2rem)",
      },
      fontSize: {
        mobileCardTitle: "clamp(3rem, 12vw - 0.2rem, 4.5rem)",
        mobileCardVHS: "clamp(2rem, 20vw - 3rem, 2.5rem)",
        mobileCardVD: "clamp(1.5rem, 20vw - 3rem, 1.875rem)",
        mobileCardRAP: "clamp(1.2rem, 20vw - 3rem, 1.5rem)",
        projectHeaderTitle: "clamp(4rem, 20vw - 4rem, 8rem)",
      },
    },
  },
  plugins: [],
};
