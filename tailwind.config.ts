import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./app/pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    imageRendering: {
      crisp: "pixelated",
      smooth: "auto",
    },
    fontFamily: {
      mulish: "Poppins, sans-serif",
    },
    fontSize: {
      "5xs": "var(--font-size-5xs)" /*10px*/,
      "4xs": "var(--font-size-4xs)" /*20px*/,
      "3xs": "var(--font-size-3xs)" /*25px*/,
      "2xs": "var(--font-size-2xs)" /*30px*/,
      xs: "var(--font-size-xs)" /*40px*/,
      sm: "var(--font-size-sm)" /*45px*/,
      md: "var(--font-size-md)" /*50px*/,
      xl: "var(--font-size-xl)" /*85px*/,
      "2xl": "var(--font-size-2xl)" /*120px*/,
    },

    screens: {
      mobile: "200px",
      tablet: "769px",
      laptop: "1024px",
      desktop: "1080px",
      television: "1430px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        main: "url('../assets/images/background/Background.svg')",
        city: "url('../assets/images/backgroundImages/city.jpg')",
        office: "url('../assets/images/backgroundImages/office.jpeg')",
      },
      colors: {
        primary: {
          default: "#22385C" /*237, 5, 144*/,
          darker: "#052441",
        },
        secondary: {
          default: "#E25813" /*66, 9, 225*/,
        },
        light: {
          default: "#D9D9D9",
        },
      },
      transitionProperty: {
        scale: "transform",
      },
      // Widths
      width: {
        "3xs": "15px", // Corresponds to 15px
        "2xs": "18px", // Corresponds to 18px
        xs: "22px", // Corresponds to 22px
        sm: "47px", // Corresponds to 47px
        md: "57px", // Corresponds to 57px
        lg: "93px", // Corresponds to 93px
        xl: "137px", // Corresponds to 137px
        "2xl": "252px", // Corresponds to 252px
        "3xl": "491px", // Corresponds to 491px
        "4xl": "819px", // Corresponds to 819px
        "5xl": "842px", // Corresponds to 842px
      },
      height: {
        xxs: "16px", // Assuming you meant 16px, as xxs height was not provided
        xs: "18px", // Corresponds to 18px
        sm: "22px", // Corresponds to 22px
        md: "52px", // Corresponds to 52px (adjusted to match closest provided measurement)
        lg: "114px", // Corresponds to 113px (adjusted for approximation)
        xl: "252px", // Corresponds to 252px
        "2xl": "397px", // Corresponds to 397px
        "3xl": "772px", // Adjusted to 772px to match provided measurements
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
