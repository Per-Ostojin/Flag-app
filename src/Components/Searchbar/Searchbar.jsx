import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = ({ darkMode }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Box
      sx={{
        position: "relative", // För absolut positionering av label
        display: "flex",
        justifyContent: { xs: "center", md: "flex-start" },
        alignItems: "center",
        marginBottom: "1rem",
        width: "100%", // Anpassar bredden till omgivande layout
      }}
    >
      {focused && (
        <Box
          sx={{
            position: "absolute",
            top: "-10px", // Placera i toppen av input
            left: "12px", // Justera för att matcha padding
            backgroundColor: darkMode ? "#2b3844" : "#f2f2f2",
            padding: "0 4px",
            fontSize: "0.75rem",
            color: darkMode ? "#f2f2f2" : "#2b3844",
            zIndex: 1, // Placera framför andra element
            transition: "all 0.3s ease", // Lägg till mjuk animation
          }}
        >
          Search for a country
        </Box>
      )}
      <TextField
        variant="outlined"
        placeholder={!focused ? "Search for a country..." : ""}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        sx={{
          height: "30px",
          width: { xs: "100%", sm: "300px" }, // Anpassar bredden för responsivitet
          backgroundColor: darkMode ? "#2b3844" : "#f2f2f2",
          borderRadius: "6px",
          "& .MuiOutlinedInput-root": {
            backgroundColor: darkMode ? "#2b3844" : "#f2f2f2",
            borderRadius: "6px",
            "& fieldset": {
              borderColor: darkMode ? "transparent" : "#2b3844",
            },
            "&:hover fieldset": {
              borderColor: darkMode ? "transparent" : "#2b3844",
            },
            "&.Mui-focused fieldset": {
              borderColor: darkMode ? "transparent" : "#2b3844",
            },
          },
          input: {
            color: darkMode ? "#f2f2f2" : "#2b3844",
            padding: "12px 16px",
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;