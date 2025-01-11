import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import MoonIcon from "../../assets/moon.svg";
import MoonBorderedIcon from "../../assets/moon-bordered.svg";
import LogoLight from "../../assets/techover-logo.png";
import LogoDark from "../../assets/techover-logo-dark.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? "#2b3844" : "#f2f2f2",
        color: darkMode ? "#f2f2f2" : "#2b3844",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          {/* Vänster: The Flag App */}
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                fontSize: isMobile ? "1rem" : "1.5rem",
              }}
            >
              The Flag App
            </Typography>
          </Grid>

          {/* Mitten: Loggan */}
          {!isMobile && (
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <img
                src={darkMode ? LogoLight : LogoDark}
                alt="Techover Logo"
                style={{ height: isMobile ? "28px" : "32px" }}
              />
            </Grid>
          )}

          {/* Höger: Dark/Light Mode-knapp */}
          <Grid item>
            <Button
              color="inherit"
              startIcon={
                <img
                  src={darkMode ? MoonIcon : MoonBorderedIcon}
                  alt="Theme Icon"
                  style={{ width: isMobile ? "18px" : "20px", height: "auto" }}
                />
              }
              onClick={toggleTheme}
              sx={{
                fontWeight: "600",
                textTransform: "none",
                fontSize: isMobile ? "0.8rem" : "1rem",
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(242, 242, 242, 0.1)"
                    : "rgba(13, 56, 68, 0.1)",
                },
              }}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;