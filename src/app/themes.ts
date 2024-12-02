import { extendTheme } from "@chakra-ui/react";
import { Lustria } from "@next/font/google";

const nextFont = Lustria({
  weight: ["400"],
  subsets: ["latin"],
});

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    body: nextFont.style.fontFamily,
    heading: nextFont.style.fontFamily,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "black" : "#f4f5ee",
        color: props.colorMode === "dark" ? "#f4f5ee" : "black",
      },
      ".bg-color": {
        bg: props.colorMode === "dark" ? "black" : "#f4f5ee",
      },
    }),
  },
});

export default theme;
