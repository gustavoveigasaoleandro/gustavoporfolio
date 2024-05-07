function toRgba(cssVariable: any) {
  const color = `var(${cssVariable})`;
  return ({ opacityValue }: any) => `rgba(${color}, ${opacityValue})`;
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mulish: "Poppins, sans-serif",
    },
    fontSize: {
      xs: "var(--font-size-xs)" /*40px*/,
      sm: "var(--font-size-sm)" /*45px*/,
      md: "var(--font-size-md)" /*50px*/,
      xl: "var(--font-size-xl)" /*120px*/,
    },

    screens: {
      mobile: "var(--screen-mobile)",
      desktop: "var(--screen-desktop)",
    },

    extend: {
      colors: {
        primary: {
          default: toRgba("--primary") /*237, 5, 144*/,
        },
      },

      textColor: {
        primary: {
          default: toRgba("--primary") /*237, 5, 144*/,
        },
        secondary: {
          default: toRgba("--secondary") /*66, 9, 225*/,
        },
      },

      backgroundColor: {
        primary: {
          default: toRgba("--primary") /*237, 5, 144*/,
        },
        secondary: {
          default: toRgba("--secondary") /*66, 9, 225*/,
        },
      },

      borderColor: {
        primary: {
          default: toRgba("--primary") /*66, 9, 225*/,
        },
        secondary: {
          default: toRgba("--secondary") /*66, 9, 225*/,
        },
      },

      // Widths
      width: {
        xs: "22",
        lg: "137px",
        xl: "252px",
        "2xl": "492px",
        "3xl": "819px",
        "4xl": "842",
      },

      // Heights
      height: {
        xxs: "16px",
        xs: "18px",
        sm: "22px",
        md: "52px",
        lg: "113px",
        xl: "252px",
        "2xl": "397px",
        "3xl": "775px",
      },
    },
  },
  plugins: [],
};
