import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { fetchAllCountries } from "../Utils/api";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowLeftDark from "../assets/arrow-left-dark.svg";
import { useTheme } from "@mui/material/styles";

const CountryPage = ({ toggleTheme }) => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // För att läsa state
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  const [country, setCountry] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const countries = await fetchAllCountries();
        setAllCountries(countries);

        const selectedCountry = countries.find(
          (item) => item.name.common.toLowerCase() === countryName.toLowerCase()
        );

        if (selectedCountry) {
          setCountry(selectedCountry);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching country data:", err);
        setError(true);
      }
    };

    fetchCountryData();
  }, [countryName]);

  if (error) {
    return (
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">Country not found.</Typography>
      </Box>
    );
  }

  if (!country) {
    return (
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">Loading...</Typography>
      </Box>
    );
  }

  // Kontrollera om användaren kom från en border country-knapp
  const showHomeButton = location.state?.fromBorderCountry || false;

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Navbar */}
      <Navbar toggleTheme={toggleTheme} />

      {/* Main Content */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem",
          marginTop: "9rem",
        }}
      >
        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <Button
            onClick={() => navigate(-1)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "transparent",
              color: theme.palette.text.primary,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
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
          {showHomeButton && (
            <Button
              onClick={() => navigate("/")}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
                color: theme.palette.text.primary,
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                boxShadow: "none",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: darkMode
                    ? "0 4px 10px rgba(255, 255, 255, 0.2)"
                    : "0 4px 10px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Home
            </Button>
          )}
        </Box>

        {/* Country Details */}
        <Grid container spacing={4} sx={{ alignItems: "flex-start" }}>
          {/* Flag */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={country.flags?.svg || country.flags?.png}
              alt={`Flag of ${country.name.common}`}
              sx={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>

          {/* Information */}
          <Grid item xs={12} md={7}>
            <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
              {country.name.common}
            </Typography>
            <Grid container spacing={2}>
              {/* Left Column */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Population:</strong>{" "}
                  {country.population.toLocaleString()}
                </Typography>
                <Typography variant="body1">
                  <strong>Region:</strong> {country.region}
                </Typography>
                <Typography variant="body1">
                  <strong>Capital:</strong>{" "}
                  {country.capital?.join(", ") || "N/A"}
                </Typography>
                <Typography variant="body1">
                  <strong>Native Name:</strong>{" "}
                  {country.name.nativeName?.[
                    Object.keys(country.name.nativeName)[0]
                  ]?.common || "N/A"}
                </Typography>
              </Grid>
              {/* Right Column */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Top Level Domain:</strong>{" "}
                  {country.tld?.join(", ") || "N/A"}
                </Typography>
                <Typography variant="body1">
                  <strong>Currencies:</strong>{" "}
                  {Object.values(country.currencies || {})
                    .map((currency) => `${currency.name} (${currency.symbol})`)
                    .join(", ") || "N/A"}
                </Typography>
                <Typography variant="body1">
                  <strong>Languages:</strong>{" "}
                  {Object.values(country.languages || {}).join(", ") || "N/A"}
                </Typography>
              </Grid>
            </Grid>

            {/* Border Countries */}
            <Box sx={{ marginTop: "2rem" }}>
              <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                <strong>Border Countries:</strong>
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {country.borders?.length
                  ? country.borders.map((border) => {
                      const borderCountry = allCountries.find(
                        (item) => item.cca3 === border
                      );
                      return borderCountry ? (
                        <Button
                          key={border}
                          onClick={() =>
                            navigate(`/country/${borderCountry.name.common}`, {
                              state: { fromBorderCountry: true }, // Skicka med state
                            })
                          }
                          sx={{
                            backgroundColor: "transparent",
                            color: theme.palette.text.primary,
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            boxShadow: "none",
                            textTransform: "none",
                            "&:hover": {
                              transform: "scale(1.05)",
                              boxShadow: darkMode
                                ? "0 4px 10px rgba(255, 255, 255, 0.2)"
                                : "0 4px 10px rgba(0, 0, 0, 0.2)",
                            },
                          }}
                        >
                          {borderCountry.name.common}
                        </Button>
                      ) : null;
                    })
                  : "None"}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CountryPage;