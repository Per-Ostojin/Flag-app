import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import createCustomTheme from "./theme/theme";
import Homepage from "./Pages/Homepage";
import CountryPage from "./Pages/CountryPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = createCustomTheme(darkMode ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Homepage toggleTheme={toggleTheme} />}
          />
          <Route
            path="/country/:countryName"
            element={<CountryPage toggleTheme={toggleTheme} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;