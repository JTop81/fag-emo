import { createTheme, Theme } from "@mui/material/styles";

// Define the theme type
const theme: Theme = createTheme({
  typography: {
    button: {
      fontSize: 16,
      fontWeight: 700,
    },
  },
});

export default theme;
