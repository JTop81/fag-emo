import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";

const MainServicesDesc: React.FC = () => {
  const MainServices = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "16px",
    fontWeight: 600,
    color: "#FF64AE",
    textTransform: "none",
    alignContent: "center",
    textAlign: "center",
  });

  const LeaernServices = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "36px",
    fontWeight: 600,
    color: "#091156",
    textTransform: "none",
    alignContent: "center",
    textAlign: "center",
  });

  const DescServices = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "16px",
    fontWeight: 400,
    color: "#8B8B8B",
    textTransform: "none",
    alignContent: "center",
    textAlign: "center",
    // width: "848px",
    // height: "51px"
  });

  return (
    <Box sx={{ px: 1, display: "flex", pl:8 }} py={4} justifyContent={"center"}>
      <Stack
        direction={"column"}
        gap={4}
        justifyContent="center"
        pr={4}
        pt={1}
        fontWeight={"regular"}
      >
        <Grid
          container
          spacing={2}
          direction={"column"}
          // justifyContent="center"
        >
          {/* Main services Desc  */}
          <Grid
            container
            spacing={2}
            direction={"column"}
            // justifyContent="center"
          >
            <Grid item>
              <MainServices justifyContent="center" align="center">
                Main Services
              </MainServices>
            </Grid>
            <Grid item>
              <LeaernServices align="center">
                Learn services to focus <br /> on your beauty
              </LeaernServices>
            </Grid>
            <Grid item>
              <DescServices align="center">
                {" "}
                Porta rhoncus orci condimentum vitae lobortis eu dignissim non
                massa. Non parturient <br /> amet, feugiat tellus sagittis,
                scelerisque eget nulla turpis.
              </DescServices>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default MainServicesDesc;
