import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ darkMode }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search for a country..."
      sx={{
        width: "300px",
        backgroundColor: darkMode ? "#2b3844" : "#f2f2f2",
        borderRadius: "6px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "6px",
          "& fieldset": {
            borderColor: darkMode ? "#f2f2f2" : "#2b3844",
          },
          "&:hover fieldset": {
            borderColor: darkMode ? "#f2f2f2" : "#2b3844",
          },
          "&.Mui-focused fieldset": {
            borderColor: darkMode ? "#f2f2f2" : "#2b3844",
          },
        },
        input: {
          padding: "12px 16px",
          color: darkMode ? "#f2f2f2" : "#2b3844",
        },
      }}
    />
  );
};

export default SearchBar;