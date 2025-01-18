import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, useTheme } from "@mui/material";
import MoonIcon from "../../assets/moon.svg";
import MoonBorderedIcon from "../../assets/moon-bordered.svg";
import LogoLight from "../../assets/techover-logo.png";
import LogoDark from "../../assets/techover-logo-dark.png";

const Navbar = ({ toggleTheme }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? theme.palette.background.default : "#f2f2f2",
        color: darkMode ? "#f2f2f2" : "#2b3844",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        height: "64px",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "0 1rem", 
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Vänster: The Flag App */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flex: "1 1 0",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              fontSize: { xs: "1rem", md: "1.5rem" },
              whiteSpace: "nowrap",
              textAlign: "left",
            }}
          >
            The Flag App
          </Typography>
        </Box>

        {/* Mitten: Loggan */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flex: "1 1 auto",
          }}
        >
          <img
            src={darkMode ? LogoLight : LogoDark}
            alt="Techover Logo"
            style={{ height: "32px" }}
          />
        </Box>

        {/* Höger: Dark Mode-knapp */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: "1 1 0",
          }}
        >
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;