// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    primary: "#121251",
    bgColor: "#f4f6f8",
    lightblue: "#1B233D",
    lightgray: "#ebebeb",
    darkgray: "#89898a",
    white: "#fff",
    cardcolor: "#fdfdfd",
    lightpurple: "#c7c6d4",
    dark: "#141414",
  },
};

const fonts = {
  heading: `'Sora Variable', sans-serif`,
  color: "red",
};

export const customTheme = extendTheme({ colors, fonts });
