import React from "react";
import { Box, useTheme } from "@mui/material";

const Flag = ({ src, alt }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "100%",
        height: "auto",
        objectFit: "contain", 
        borderBottom: `1px solid ${darkMode ? theme.palette.secondary.main : "#e0e0e0"}`,
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", 
      }}
    />
  );
};

export default Flag;