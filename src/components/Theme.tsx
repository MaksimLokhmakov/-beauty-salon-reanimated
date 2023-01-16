import {
  createText,
  createBox,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { Dimensions } from "react-native";

export const largeDevice = Dimensions.get("window").height > 700;

const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    text: "rgba(12, 13, 52, 0.7)",
    white: "white",
    grey: "rgba(12, 13, 52, 0.05)",
    darkGrey: "#808080",
    danger: "#ff0058",
    primaryLight: "#e7f9f7",
    yellow: "#f4c742",
    pink: "#eb809a",
    orange: "#e8562a",
    blue: "#3b1aaf",
    black: "#0a0b35",
  },
  spacing: {
    0: 0,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 50,
  },
  borderRadii: {
    0: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontFamily: "SFProText-Bold",
      fontSize: 70,
      lineHeight: 70,
      color: "white",
      textAlign: "center",
    },
    header: {
      fontFamily: "SFProText-Regular",
      fontSize: 16,
      color: "white",
      textAlign: "center",
      letterSpacing: 2,
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-Semibold",
      lineHeight: 40,
      color: "secondary",
      textAlign: "center",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-Semibold",
      color: "secondary",
      textAlign: "center",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "text",
      textAlign: "center",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProText-Semibold",
      color: "text",
      textAlign: "center",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
export default theme;
