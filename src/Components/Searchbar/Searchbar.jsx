import React, { useState } from "react";
import { TextField, Box, Grid, useTheme } from "@mui/material";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [focused, setFocused] = useState(false);
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Grid
      container
      sx={{
        width: "100%",
        maxWidth: "400px",
        position: "relative",
        height: "50px", // Uppdaterad höjd
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box", // Säkerställer konsekvent dimensionering
      }}
    >
      {focused && (
        <Box
          sx={{
            position: "absolute",
            top: "-10px",
            left: "12px",
            backgroundColor: theme.palette.background.paper,
            padding: "0 4px",
            fontSize: "0.75rem",
            color: theme.palette.text.primary,
            zIndex: 1,
            transition: "all 0.3s ease",
          }}
        >
          Search for a country
        </Box>
      )}
      <TextField
        variant="outlined"
        placeholder={!focused ? "Search for a country..." : ""}
        value={searchQuery} // Kopplar värdet till state
        onChange={(e) => setSearchQuery(e.target.value)} // Uppdaterar sökfrågan
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        sx={{
          width: "100%",
          height: "100%", // Anpassar till containerns höjd
          backgroundColor: theme.palette.background.paper,
          borderRadius: "6px",
          "& .MuiOutlinedInput-root": {
            height: "100%", // Säkerställer höjd
            backgroundColor: theme.palette.background.paper,
            borderRadius: "6px",
            "& fieldset": {
              borderColor: darkMode ? "transparent" : theme.palette.text.primary,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.text.primary,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.text.primary,
            },
          },
          input: {
            color: theme.palette.text.primary,
            padding: "12px 16px", // Säkerställer konsistent padding
          },
        }}
      />
    </Grid>
  );
};

export default SearchBar;