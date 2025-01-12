import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/Searchbar/Searchbar";
import DropdownMenu from "./Components/Dropdown-menu/Dropdown-menu";
import CountryCard from "./Components/CountryCard/CountryCard";
import { Box } from "@mui/material";
import { useState } from "react";
import { exampleData } from "./Components/CountryCard/data";

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

      {/* Filters */}
      <Box
        sx={{
          marginTop: { xs: "1rem", md: "2rem" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "1rem",
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          padding: { xs: "0 1rem", md: "0 5rem" },
        }}
      >
        <SearchBar darkMode={darkMode} />
        <DropdownMenu darkMode={darkMode} />
      </Box>

      {/* Country Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // Enkel kolumnlayout på mobil
            sm: "1fr 1fr", // Två kolumner på mindre skärmar
            md: "1fr 1fr 1fr 1fr", // Fyra kolumner på desktop
          },
          justifyItems: "center", // Centrerar korten horisontellt
          gap: "1.5rem", // Mellanrum mellan korten
          margin: "2rem auto", // Centrera gridens innehåll
          padding: { xs: "0 1rem", md: "0 5rem" }, // Justera padding
        }}
      >
        {exampleData.map((country) => (
          <CountryCard
            key={country.name}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            darkMode={darkMode}
          />
        ))}
      </Box>
    </Box>
  );
}

export default App;