import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import MoonIcon from "../../assets/moon.svg";
import MoonBorderedIcon from "../../assets/moon-bordered.svg";
import LogoLight from "../../assets/techover-logo.png";
import LogoDark from "../../assets/techover-logo-dark.png";

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? "#2b3844" : "#f2f2f2",
        color: darkMode ? "#f2f2f2" : "#2b3844",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "0 1rem", sm: "0 2rem", md: "0 5rem" }, // Dynamisk padding
        }}
      >
        {/* Vänster: The Flag App */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            fontSize: { xs: "1.2rem", md: "1.5rem" }, // Dynamisk fontstorlek
          }}
        >
          The Flag App
        </Typography>

        {/* Mitten: Loggan */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <img
            src={darkMode ? LogoLight : LogoDark}
            alt="Techover Logo"
            style={{ height: "32px" }}
          />
        </Box>

        {/* Höger: Dark/Light Mode-knapp */}
        <Button
          color="inherit"
          startIcon={
            <img
              src={darkMode ? MoonIcon : MoonBorderedIcon}
              alt="Theme Icon"
              style={{ width: "20px", height: "20px" }}
            />
          }
          onClick={toggleTheme}
          sx={{
            fontWeight: "600",
            textTransform: "none",
            fontSize: { xs: "0.8rem", md: "1rem" },
            "&:hover": {
              backgroundColor: darkMode
                ? "rgba(242, 242, 242, 0.1)"
                : "rgba(13, 56, 68, 0.1)",
            },
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;