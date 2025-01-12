import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid, Container } from "@mui/material";
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
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  fontSize: "1.5rem",
                }}
              >
                The Flag App
              </Typography>
            </Grid>

            <Grid
              item
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
            </Grid>

            <Grid item>
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
                  fontSize: "1rem",
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
      </Container>
    </AppBar>
  );
};

export default Navbar;