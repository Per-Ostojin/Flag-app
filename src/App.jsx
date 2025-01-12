import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/Searchbar/Searchbar";
import DropdownMenu from "./Components/Dropdown-menu/Dropdown-menu";
import { Box } from "@mui/material";
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
        padding: { xs: "1rem", md: "0" },
      }}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Content */}
      <Box
        sx={{
          marginTop: { xs: "1rem", md: "2rem" }, // Mindre mellanrum på mobil
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "1rem", // Mellanrum mellan SearchBar och DropdownMenu
          alignItems: { xs: "flex-start", md: "center" }, // Vänsterjustering på mobil, centrerad på desktop
          justifyContent: "space-between",
          padding: { xs: "0 1rem", md: "0 5rem" }, // Justering för padding
        }}
      >
        {/* SearchBar */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            marginBottom: { xs: "0.5rem", md: "0" }, // Extra mellanrum under på mobil
            width: { xs: "100%", md: "auto" }, // Full bredd på mobil
          }}
        >
          <SearchBar darkMode={darkMode} />
        </Box>

        {/* DropdownMenu */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" }, // Vänsterjustering på mobil, högerjustering på desktop
            width: { xs: "75%", md: "auto" }, // Två tredjedelar av bredden på mobil
          }}
        >
          <DropdownMenu darkMode={darkMode} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;