import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
  "3xl": "1800px",
  xxl: "2000px",
};

export const ChakraCustomTheme = () => {
  let theme = extendTheme({ breakpoints });
  return theme;
};
