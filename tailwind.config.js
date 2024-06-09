/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 30s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        wide: "2500px",
        xs: "300px",
      },
      colors: {
        primary: "#1D1A1A",
        textColor: "#F2ECEC",
        project: "#0D0D0C",
        paragraph: "#B1B1B1",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        playfair: ["var(--font-playfair)"],
      },
      padding: {
        projectHeaderPadding: "clamp(0.8rem, 10vw - 2rem, 2rem)",
      },
      width: {
        image: "clamp(3rem, 25vw, 14rem)",
      },

      fontSize: {
        //projectMobileCard
        mobileCardTitle: "clamp(3rem, 10vw - 0.8rem, 3.5rem)",
        mobileCardVHS: "clamp(2rem, 20vw - 3rem, 2.5rem)",
        mobileCardVD: "clamp(0.3rem, 5vw , 1.875rem)",
        mobileCardRAP: "clamp(0.2rem, 3vw , 1.5rem)",

        projectHeaderTitle: "clamp(3rem, 13vw, 7rem)",
        subHeading: "clamp(2rem, 16vw, 7rem)",
        longHeading: "clamp(2rem, 10vw, 7rem)",

        //button
        button: "clamp(1.2rem, 4vw - 0.4rem, 2.25rem)",

        //footer
        coordinates: "clamp(0.7rem, 4vw - 0.4rem, 2.25rem)",
        footerLink: "clamp(0.5rem, 4vw - 0.4rem, 2.25rem)",
      },
    },
  },
  plugins: [],
};
