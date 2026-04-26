import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/appPages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|checkbox|chip|dropdown|input|pagination|radio|select|toast|user|ripple|spinner|form|menu|divider|popover|listbox|scroll-shadow|avatar|tabs|navbar).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-be-vietnam)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-fraunces)",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      colors: {
        paper: {
          50: "#FDFAF3",
          DEFAULT: "#FAF6EE",
          200: "#F2EAD9",
          300: "#E6D9BD",
        },
        ink: "#1A1F33",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          lg: "0",
        },
        screens: {
          lg: "1248px",
        },
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            default: {
              50: "#fafafa",
              100: "#f2f2f3",
              200: "#ebebec",
              300: "#e3e3e6",
              400: "#dcdcdf",
              500: "#d4d4d8",
              600: "#afafb2",
              700: "#8a8a8c",
              800: "#656567",
              900: "#404041",
              foreground: "#000",
              DEFAULT: "#d4d4d8",
            },
            primary: {
              50: "#f9e4e5",
              100: "#f1bdc0",
              200: "#e8979b",
              300: "#e07176",
              400: "#d74a51",
              500: "#cf242c",
              600: "#ab1e24",
              700: "#87171d",
              800: "#621115",
              900: "#3e0b0d",
              foreground: "#fff",
              DEFAULT: "#cf242c",
            },
            secondary: {
              50: "#e4e5e8",
              100: "#bec0c8",
              200: "#979ba8",
              300: "#717688",
              400: "#4b5168",
              500: "#252c48",
              600: "#1f243b",
              700: "#181d2f",
              800: "#121522",
              900: "#0b0d16",
              foreground: "#fff",
              DEFAULT: "#252c48",
            },
            success: {
              50: "#e2f8ec",
              100: "#b9efd1",
              200: "#91e5b5",
              300: "#68dc9a",
              400: "#40d27f",
              500: "#17c964",
              600: "#13a653",
              700: "#0f8341",
              800: "#0b5f30",
              900: "#073c1e",
              foreground: "#000",
              DEFAULT: "#17c964",
            },
            warning: {
              50: "#fef4e4",
              100: "#fce4bd",
              200: "#fad497",
              300: "#f9c571",
              400: "#f7b54a",
              500: "#f5a524",
              600: "#ca881e",
              700: "#9f6b17",
              800: "#744e11",
              900: "#4a320b",
              foreground: "#000",
              DEFAULT: "#f5a524",
            },
            danger: {
              50: "#fee1eb",
              100: "#fbb8cf",
              200: "#f98eb3",
              300: "#f76598",
              400: "#f53b7c",
              500: "#f31260",
              600: "#c80f4f",
              700: "#9e0c3e",
              800: "#73092e",
              900: "#49051d",
              foreground: "#000",
              DEFAULT: "#f31260",
            },
            background: "#ffffff",
            foreground: "#000000",
            content1: {
              DEFAULT: "#ffffff",
              foreground: "#000",
            },
            content2: {
              DEFAULT: "#f4f4f5",
              foreground: "#27272a",
            },
            content3: {
              DEFAULT: "#e4e4e7",
              foreground: "#3f3f46",
            },
            content4: {
              DEFAULT: "#d4d4d8",
              foreground: "#52525b",
            },
            focus: "#006FEE",
            overlay: "#000000",
          },
        },
      },
      layout: {
        disabledOpacity: "0.5",
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "2px",
        },
      },
    }),
  ],
};

export default config;
