import React from "react";
import { Box, Typography } from "@mui/material";

const CountryCard = ({ flag, name, population, region, capital, darkMode }) => {
  return (
    <Box
      sx={{
        width: "300px",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "transparent", // Transparent bakgrund
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)", // Skalning vid hover
          boxShadow: darkMode
            ? "0 4px 10px rgba(255, 255, 255, 0.2)"
            : "0 4px 10px rgba(0, 0, 0, 0.2)", // Skuggeffekt
        },
      }}
    >
      {/* Flagga */}
      <Box
        component="img"
        src={flag}
        alt={`Flag of ${name}`}
        sx={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
      />

      {/* Landinformation */}
      <Box sx={{ padding: "1rem" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            marginBottom: "0.5rem",
            color: darkMode ? "#f2f2f2" : "#2b3844", // Titelns färg
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: "0.25rem",
            color: darkMode ? "#f2f2f2" : "#2b3844", // Textfärg för övrigt
          }}
        >
          <strong>Population:</strong> {population.toLocaleString()}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: "0.25rem",
            color: darkMode ? "#f2f2f2" : "#2b3844", // Textfärg för övrigt
          }}
        >
          <strong>Region:</strong> {region}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: darkMode ? "#f2f2f2" : "#2b3844", // Textfärg för övrigt
          }}
        >
          <strong>Capital:</strong> {capital}
        </Typography>
      </Box>
    </Box>
  );
};

export default CountryCard;