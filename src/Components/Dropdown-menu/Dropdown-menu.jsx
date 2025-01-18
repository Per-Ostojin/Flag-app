import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, Grid, useTheme } from "@mui/material";
import ArrowDownLight from "../../assets/arrow-down-light.svg";
import ArrowDownDark from "../../assets/arrow-down-dark.svg";

const regions = ["All", "Africa", "Americas", "Antarctic", "Asia", "Europe", "Oceania"];

const DropdownMenu = ({ selectedRegion, setSelectedRegion }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [focused, setFocused] = useState(false); 
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setFocused(true); 
  };

  const handleClose = (region) => {
    setAnchorEl(null);
    if (region) {
      setSelectedRegion(region === "All" ? "" : region); 
    }
    setFocused(false); 
  };

  return (
    <Grid
      container
      sx={{
        justifyContent: "flex-end",
        maxWidth: "300px",
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {focused && (
        <Typography
          sx={{
            position: "absolute",
            top: "-8px",
            left: "12px",
            backgroundColor: theme.palette.background.paper,
            padding: "0 4px",
            fontSize: "0.75rem",
            color: theme.palette.text.primary,
            zIndex: 1,
            transition: "all 0.3s ease",
          }}
        >
          Filter by region
        </Typography>
      )}
      <Grid item xs={12}>
        <Box
          onClick={handleClick}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: "0 1rem",
            borderRadius: "6px",
            border: `1px solid ${darkMode ? "transparent" : theme.palette.text.primary}`,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            cursor: "pointer",
            boxSizing: "border-box",
          }}
        >
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: "0.9rem",
              lineHeight: "50px",
              marginRight: "0.5rem",
              visibility: focused ? "hidden" : "visible", 
            }}
          >
            {selectedRegion || "Filter by region"}
          </Typography>
          <img
            src={darkMode ? ArrowDownLight : ArrowDownDark}
            alt="Dropdown Icon"
            style={{
              width: "16px",
              height: "16px",
            }}
          />
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose(null)}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            },
          }}
        >
          {regions.map((region) => (
            <MenuItem
              key={region}
              onClick={() => handleClose(region)}
              sx={{
                "&:hover": {
                  backgroundColor: darkMode ? "#394a58" : "#e0e0e0",
                },
              }}
            >
              {region}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </Grid>
  );
};

export default DropdownMenu;