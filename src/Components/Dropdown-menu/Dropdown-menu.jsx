import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import ArrowDownLight from "../../assets/arrow-down-light.svg";
import ArrowDownDark from "../../assets/arrow-down-dark.svg";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const DropdownMenu = ({ darkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [focused, setFocused] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Region");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setFocused(true);
  };

  const handleClose = (region) => {
    if (region) {
      setSelectedRegion(region);
    }
    setAnchorEl(null);
    setFocused(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "flex-start", md: "flex-end" }, // Placering för mobil och desktop
        height: "30px",
        width: { xs: "66%", md: "200px" }, // Mindre bredd på mobil
      }}
    >
      {/* Label */}
      {focused && (
        <Box
          sx={{
            position: "absolute",
            top: "-10px",
            left: "12px",
            backgroundColor: darkMode ? "#2b3844" : "#f2f2f2",
            padding: "0 4px",
            fontSize: "0.8rem",
            color: darkMode ? "#f2f2f2" : "#2b3844",
            zIndex: 1,
            transition: "all 0.3s ease",
          }}
        >
          Filter by Region
        </Box>
      )}

      {/* Dropdown Button */}
      <Box
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "30px",
          width: "100%", // Full bredd för den yttre behållaren
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          border: "1px solid",
          borderColor: darkMode ? "transparent" : "#2b3844",
          backgroundColor: darkMode ? "#2b3844" : "#f2f2f2",
          color: darkMode ? "#f2f2f2" : "#2b3844",
          cursor: "pointer",
          "&:hover": {
            borderColor: darkMode ? "#f2f2f2" : "#2b3844",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 300,
            fontSize: "0.9rem",
            marginRight: "0.5rem",
            lineHeight: "1",
            visibility: focused ? "hidden" : "visible",
          }}
        >
          {selectedRegion}
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

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: darkMode ? "#2b3844" : "#f2f2f2",
            color: darkMode ? "#f2f2f2" : "#2b3844",
          },
        }}
      >
        {regions.map((region) => (
          <MenuItem
            key={region}
            onClick={() => handleClose(region)}
            sx={{
              "&:hover": {
                backgroundColor: darkMode ? "#2a3745" : "#e0e0e0",
              },
            }}
          >
            {region}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default DropdownMenu;