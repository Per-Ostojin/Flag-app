import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/Searchbar/Searchbar";
import { Box, Container } from "@mui/material";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#202c36" : "#f2f2f2",
        color: darkMode ? "#f2f2f2" : "#2b3844",
        minHeight: "100vh",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Content container */}
      <Container maxWidth="lg" sx={{ padding: "1rem 0" }}>
        {/* SearchBar */}
        <SearchBar darkMode={darkMode} />
      </Container>
    </Box>
  );
}

export default App;