import { Box } from "@mui/material";
import React from "react";
import Stylist from "../Assets/Stylist.svg"

const StylistProfessional: React.FC = () => {
  return (
    <Box
      sx={{
        position: "flex",
        // zIndex: -8,
          display: "inline-flex",
      }}
    >
      <img src={Stylist} width="80%" height="auto" />
    </Box>
  );
};
export default StylistProfessional;
