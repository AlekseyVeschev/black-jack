import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    // light: will be calculated from palette.primary.main,
    primary: {
      dark: "#2A4A68",
      main: "#3978B2",
      light: "#48A8FF",
    },
    secondary: {
      dark: "#1C5939",
      main: "#1D9655",
      light: "#1DD672",
      // hover: "#56E095",
      // highlight: "#99EDC0",
    },
    // light: "#7587FF",
    // main: "#39E33C",
    // dark: "#41C6FA",
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main

    text: {
      disabled: "#8A8B8B",
      secondary: "#F9F9F9",
      primary: "#1B1C1D",
      hint: "#535354",
      // action: "#101111",
      // highlight: "#080809",
    },
  },
});
