import React from "react";
import Navbar from "./navBar/navBar";
import Slider from "./slider/slider";
import MainServices from "./mainServices/mainServicesDesc";
import AboutUs from "./aboutUs/aboutUs";
import ProfesionalTeam from "./professionalTeam/professionalTeam";
import ContactUs from "./contactUs/contactUs";
import Footer from "./footer/Footer";
import NavBarSliderBg from "../Assets/navBarslideBackground";
import { Box, Container, Grid } from "@mui/material";
import ServicesDetail from "./mainServices/servicesDetail";
import AboutUsBg from "../Assets/aboutUsBg";
import ProfessionalDetail from "./professionalTeam/professionalDetail";
import ContactUsBg from "../Assets/contactUsBg";
import CompliedBg from "./footer/CompliedBg";

const Home = () => {
  return (
    <Box maxWidth="1440">
      <Container>
        {/* Background  */}
        <NavBarSliderBg />
        {/* NavBar */}
        <Box>
          <Grid
            container
            spacing={2}
            direction={"column"}
            justifyContent="center"
          >
            <Grid item>
              <Navbar />
            </Grid>
            {/* Content  */}
            {/* ///// */}
            {/* Slider  */}
            <Grid item>
              <Slider />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container>
        <AboutUsBg />
        <Box mt={8}>
          <Grid
            container
            spacing={2}
            direction={"column"}
            justifyContent="center"
          >
            <Grid item>
              {/* MainService  */}
              <Grid>
                <Grid item>
                  <MainServices />
                </Grid>
                <Grid item>
                  <ServicesDetail />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* AboutUs  */}
              <AboutUs />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container>
        {/* Background  */}
        <ContactUsBg />
        <Box mt={8} paddingBottom={18}>
          <Grid
            container
            spacing={2}
            direction={"column"}
            justifyContent="center"
          >
            <Grid item>
              {/* ProfesionalTeam  */}
              <Grid>
                <Grid item>
                  <ProfesionalTeam />
                </Grid>
                <Grid item>
                  <ProfessionalDetail />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* ContactUs  */}
              <ContactUs />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* //// */}
      {/* Footer  */}
      <Container>
        <CompliedBg/>
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
