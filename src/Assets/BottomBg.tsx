import { Box } from "@mui/material";
import React from "react";

const BottomBg: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: -10,
        left: 0,
        display: "inline-flex",
        // mt: "555px",
        bottom:0
      }}
    >
      <svg
        width="1440"
        height="125"
        viewBox="0 0 1440 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="1440"
          height="125"
          transform="matrix(1 0 0 -1 0 125)"
          fill="#0D165C"
        />
      </svg>
    </Box>
  );
};

export default BottomBg;
