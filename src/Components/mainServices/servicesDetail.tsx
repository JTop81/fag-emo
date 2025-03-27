import { Box, Grid } from "@mui/material";
import React from "react";
import BeautyConsultation from "../../Assets/BeautyConsultation";
import SkinTreatments from "../../Assets/SkinTreatments";
import BeautyProduct from "../../Assets/BeautyProduct";

const ServicesDetail: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }} py={4} justifyContent={"center"}>
      <Grid
        container
        // spacing={0}
        direction={{xs: "column", md: "column", lg: "row" }}
        justifyContent="center"
      >
        <Grid item xs={4}>
          <BeautyConsultation />
        </Grid>
        <Grid item xs={4} >
          <SkinTreatments />
        </Grid>
        <Grid item xs={4} >
          <BeautyProduct />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesDetail;
