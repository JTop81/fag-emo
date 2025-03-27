import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import AnimationSlider from "../../Assets/animationSlider";
import SliderButton from "./sliderButton";

const Slider: React.FC = () => {
  const ClinicBeautyConsultant = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "48px",
    fontWeight: 600,
    color: "#091156",
    // lineHeight: 60,
    textTransform: "none",
  });
  const ItIsALong = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "16px",
    fontWeight: 500,
    color: "#091156",
    // lineHeight: 24,
    textTransform: "none",
  });
  const MoreDetailButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    fontWeight: 600,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#FF64AE",
    borderColor: "#FF64AE",
    borderRadius: "50px",
    width: "200px",
    height: "58.36px",
  });
  return (
    <Box>
      <Grid container spacing={2} direction={{ xs:"column", md: "column", lg: "row" }}>
        <Grid item xs={6}>
          {/* desc  */}
          <Box sx={{ pl: 4, pt: 4 }}>
            <Grid direction={"column"}>
              {/* Clinic &amp; beauty consultant */}
              <Grid item>
                <ClinicBeautyConsultant>
                  {" "}
                  Clinic &amp; beauty
                  <br />
                  consultant
                </ClinicBeautyConsultant>
              </Grid>
              {/* It is a long established fact that a reader will be */}
              <Grid item>
                <ItIsALong>
                  {" "}
                  It is a long established fact that a reader will be by the
                  readable content of a page.
                </ItIsALong>
              </Grid>
              <Grid item pt={6}>
                {/* more detail button*/}
                <MoreDetailButton variant="contained">
                  {" "}
                  More Detail
                </MoreDetailButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={6}>
          {/* animation  */}
          <AnimationSlider />
        </Grid>
      </Grid>
      <SliderButton/>
    </Box>
  );
};

export default Slider;
