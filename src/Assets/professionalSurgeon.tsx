import { Box } from "@mui/material";
import React from "react";
import Surgeon from "../Assets/Surgeon.svg";

const SurgeonProfessional: React.FC = () => {
  return (
    <Box
      sx={{
        position: "flex",
        // zIndex: -8,
        display: "inline-flex",
      }}
    >
      <img src={Surgeon} width="80%" height="auto"/>

    </Box>
  );
};
export default SurgeonProfessional;
