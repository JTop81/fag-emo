import { Box, Container } from "@mui/material";
import React from "react";
import BottomBg from "../../Assets/BottomBg";
import FooterBg from "../../Assets/FooterBg";

const CompliedBg: React.FC = () => {
    return (
      <Box 
        
          sx={{
            position: "absolute",
            zIndex: -8,
            // right: 0,
            left: 0,
            display: "inline-flex",
                mt: "555px",
            
            // bottom: 0,
          }}
        >
          <BottomBg />
          <FooterBg />
      </Box>
    );
};

export default CompliedBg;
