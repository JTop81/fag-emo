import { Box, Grid } from "@mui/material";
import React from "react";
import SurgeonProfessional from "../../Assets/professionalSurgeon";
import DermatologistProfessional from "../../Assets/professionalDermatologist";
import StylistProfessional from "../../Assets/professionalStylist";

const ProfessionalDetail: React.FC = () => {
  return (
    <Box
      sx={{ display: "flex", mt: 4 }}
      py={4}
      justifyContent={"center"}
      px={4}
      ml={4}
    >
      <Grid
        container
        spacing={0}
        direction={{ xs: "column", md: "column", lg: "row" }}
        justifyContent="center"
      >
        <Grid item xs={3} justifyContent="center" justifyItems="center">
          <SurgeonProfessional />
        </Grid>
        <Grid item xs={5}>
          <DermatologistProfessional />
        </Grid>
        <Grid item xs={3}>
          <StylistProfessional />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessionalDetail;
