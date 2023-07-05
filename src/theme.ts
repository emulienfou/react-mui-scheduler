import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";

const theme = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    divider: "rgba(0, 0, 0, 0.12)",
    primary: {
      light: blue[400],
      main: blue[500],
      dark: blue[700],
      contrastText: "#fff",
    },
    secondary: {
      light: orange[400],
      main: orange[500],
      dark: orange[700],
      contrastText: "#fff",
    },
    contrastThreshold: 3,
  },
});

export default theme;
