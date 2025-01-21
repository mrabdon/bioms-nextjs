import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#DFDEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCEB",
        primary: "#48BB78",
        secondary: "#2f855a",
        accent: "#38a169",
        neutral: "#f7fafc",
        text: "#2d3748",
        highlight: "#bee3f8",
        ronRedLight: "#ffdfdf",
        ronGreen: "#48bb78;",
        ronMintGreen: "#B2F5EA",
        ronLimeGreen: "#C6F6D5",
        ronSageGreen: "#9AE6B4 ",
        ronAccentBeige: "#F5F5DC",
        ronAccentYellowWarm: "#FAF089",
        ronTextDarkGreen: "#2F855A ",
        ronTextOffWhite: "#F7FAFC",
        rondGreen: "#ADD8E6 ",
        rondYellow: "#FFFACD ",
        rondGray: " #D3D3D3 ",
      },
    },
  },
  plugins: [],
};
export default config;
