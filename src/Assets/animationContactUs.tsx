import { Box } from "@mui/material";
import React from "react";
import ContactAnimation from "./../Assets/ContactAnimations.svg";

const AnimationContactUS: React.FC = () => {
  return (
    <Box sx={{ mr: 4, top: 0 }}>
      <img src={ContactAnimation} alt="ContactAnimation" />
    </Box>
  );
};

export default AnimationContactUS;
