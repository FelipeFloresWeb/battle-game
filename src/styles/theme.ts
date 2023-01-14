import { extendTheme } from "@chakra-ui/react";

export const defaultColors = {
  primary: "#B1A0E9",
  secondary: "#869FCF",
  tertiary: "#C493CF",
  end: "#814fef",
  warning: "#FFFAF0",
  error: "#FA8AA4",
  success: "#F0FFF4",
  warningText: "#ED8936",
  errorText: "#9B2C2C",
  successText: "#276749",
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({ colors, ...defaultColors });
