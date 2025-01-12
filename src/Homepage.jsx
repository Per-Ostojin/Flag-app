import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/Searchbar/Searchbar";
import DropdownMenu from "./Components/Dropdown-menu/Dropdown-menu";
import CountryCard from "./Components/CountryCard/CountryCard";
import { Box } from "@mui/material";
import { exampleData } from "./Components/CountryCard/data";

function Homepage({ darkMode, toggleTheme }) {
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
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          justifyItems: "center",
          gap: "1.5rem",
          margin: "2rem auto",
          padding: { xs: "0 1rem", md: "0 5rem" },
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

export default Homepage;