import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AllRoutes from "./shared/routes/AllRoutes";
import Button from "@mui/material/Button";
import Brightness5Icon from '@mui/icons-material/Brightness5';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    typography: {
      fontFamily: "'Roboto Mono', monospace;",
    },
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button
        style={{ position: "fixed", top: 10, right: 10, padding:18}}
        onClick={toggleDarkMode}
        color="inherit"
      >
        {darkMode ? <Brightness5Icon /> : < DarkModeIcon/>}
      </Button>
      <AllRoutes />
    </ThemeProvider>
  );
};

export default App;
