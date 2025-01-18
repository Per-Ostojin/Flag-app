import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const CountryCard = ({ flag, name, population, region, capital }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Box
      component={Link}
      to={`/country/${name}`}
      sx={{
        display: "block",
        textDecoration: "none",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: theme.palette.background.paper,
        border: `2px solid ${darkMode ? theme.palette.secondary.main : "#e0e0e0"}`,
        "&:hover": {
          transform: "scale(1.05)", // Liten skalförändring
          boxShadow: darkMode
            ? "0 8px 15px rgba(255, 255, 255, 0.2)" // Skugga i mörkt läge
            : "0 8px 15px rgba(0, 0, 0, 0.2)", // Skugga i ljust läge
        },
      }}
    >
      {/* Flag */}
      <Box
        component="img"
        src={flag}
        alt={`Flag of ${name}`}
        sx={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderBottom: `1px solid ${darkMode ? theme.palette.secondary.main : "#e0e0e0"}`,
        }}
      />

      {/* Country Details */}
      <Box sx={{ padding: "1rem" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            marginBottom: "0.5rem",
            color: theme.palette.text.primary,
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: "0.25rem",
            color: theme.palette.text.primary,
          }}
        >
          <strong>Population:</strong> {population.toLocaleString()}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: "0.25rem",
            color: theme.palette.text.primary,
          }}
        >
          <strong>Region:</strong> {region}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          <strong>Capital:</strong> {capital}
        </Typography>
      </Box>
    </Box>
  );
};

export default CountryCard;