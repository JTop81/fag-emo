import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";

const ProfessionalTeam: React.FC = () => {
  const ProfessionalTeamTitle = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "16px",
    fontWeight: 600,
    color: "#FF64AE",
    textTransform: "none",
    alignContent: "center",
    textAlign: "center",
  });

  const ProfessionalExpert = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "36px",
    fontWeight: 600,
    color: "#091156",
    textTransform: "none",
    alignContent: "center",
    textAlign: "center",
  });

  const ProfessionalDesc = styled(Typography)({
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
    <Box
      sx={{ px: 1, display: "flex", pl: 8 }}
      py={4}
      justifyContent={"center"}
    >
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
              <ProfessionalTeamTitle justifyContent="center" align="center">
                Professional Teams
              </ProfessionalTeamTitle>
            </Grid>
            <Grid item>
              <ProfessionalExpert align="center">
                The Professional expert
              </ProfessionalExpert>
            </Grid>
            <Grid item>
              <ProfessionalDesc align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam.
              </ProfessionalDesc>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default ProfessionalTeam;
