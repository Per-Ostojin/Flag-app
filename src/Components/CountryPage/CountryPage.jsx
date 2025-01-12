import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { exampleData } from "../CountryCard/data";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowLeftDark from "../../assets/arrow-left-dark.svg";

const CountryPage = ({ darkMode, toggleTheme }) => {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const country = exampleData.find(
    (item) => item.name.toLowerCase() === countryName.toLowerCase()
  );

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

      {/* Back Button */}
      <Box sx={{ padding: { xs: "1rem", md: "5rem" } }}>
        <Button
          onClick={() => navigate(-1)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "transparent",
            color: darkMode ? "#f2f2f2" : "#2b3844",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "none",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "none",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: darkMode
                ? "0 4px 10px rgba(255, 255, 255, 0.2)"
                : "0 4px 10px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <img
            src={darkMode ? ArrowLeft : ArrowLeftDark}
            alt="Back"
            style={{ width: "20px", height: "20px" }}
          />
          Back
        </Button>

        {/* Country Details */}
        {country ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "flex-start" },
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            {/* Flag */}
            <Box
              component="img"
              src={country.flag}
              alt={`Flag of ${country.name}`}
              sx={{
                width: { xs: "100%", md: "40%" },
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />

            {/* Information */}
            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
                {country.name}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
                <strong>Native Name:</strong>{" "}
                {country.nativeName || country.name}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
                <strong>Region:</strong> {country.region}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
                <strong>Sub Region:</strong> {country.subRegion || "N/A"}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
                <strong>Capital:</strong> {country.capital}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
                <strong>Top Level Domain:</strong>{" "}
                {country.topLevelDomain?.join(", ") || "N/A"}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
                <strong>Currencies:</strong>{" "}
                {country.currencies
                  ?.map((cur) => `${cur.name} (${cur.symbol})`)
                  .join(", ") || "N/A"}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
                <strong>Languages:</strong>{" "}
                {country.languages?.join(", ") || "N/A"}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
                <strong>Border Countries:</strong>{" "}
                {country.borders?.length
                  ? country.borders.map((border, index) => {
                      // Hitta grannlandet i exampleData baserat på namn
                      const borderCountry = exampleData.find(
                        (item) =>
                          item.name.toLowerCase() === border.toLowerCase()
                      );
                      return borderCountry ? (
                        <Link
                          key={index}
                          to={`/country/${borderCountry.name}`}
                          style={{
                            textDecoration: "none",
                            color: darkMode ? "#f2f2f2" : "#2b3844",
                            marginRight: "0.5rem",
                            padding: "0.25rem 0.5rem",
                            border: `1px solid ${
                              darkMode ? "#f2f2f2" : "#2b3844"
                            }`,
                            borderRadius: "4px",
                            display: "inline-block",
                          }}
                        >
                          {borderCountry.name}
                        </Link>
                      ) : null; // Om grannlandet inte finns i exampleData
                    })
                  : "None"}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Typography variant="body1">Country not found.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default CountryPage;
