import { createTheme } from "@mui/material/styles";

const createCustomTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "dark" ? "#202C36" : "#F2F2F2",
        paper: mode === "dark" ? "#2B3844" : "#F2F2F2",
      },
      text: {
        primary: mode === "dark" ? "#F2F2F2" : "#2B3844",
      },
      primary: {
        main: mode === "dark" ? "#F2F2F2" : "#2B3844",
      },
      secondary: {
        main: mode === "dark" ? "#394a58" : "#202C36",
      },
    },
    typography: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 800,
    },
  });

export default createCustomTheme;