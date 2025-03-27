import { Box } from "@mui/material";
import React from "react";

const SliderButton: React.FC = () => {
  return (
    <Box sx={{position: "flex", right:3}} justifyContent='center'>
      <svg
        width="100%"
        height="9"
        viewBox="0 0 71 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ justifyContent: "center" }}
      >
        <path
          d="M56.1826 4.36384C56.1826 5.21628 56.8737 5.90732 57.7261 5.90732H69.4565C70.309 5.90732 71 5.21628 71 4.36384C71 3.5114 70.309 2.82036 69.4565 2.82036H57.7261C56.8737 2.82036 56.1826 3.5114 56.1826 4.36384Z"
          fill="#EEEEEE"
        />
        <rect
          width="25.313"
          height="8.14614"
          rx="4.07307"
          transform="matrix(1 0 0 -1 22.8435 9)"
          fill="#414880"
        />
        <rect
          width="14.8174"
          height="3.08696"
          rx="1.54348"
          transform="matrix(1 0 0 -1 0 5.90732)"
          fill="#EEEEEE"
        />
      </svg>
    </Box>
  );
};

export default SliderButton;
