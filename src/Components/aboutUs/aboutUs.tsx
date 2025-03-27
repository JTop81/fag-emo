import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";
import ThumbnailAboutUs from "../../Assets/thumbnailAboutUs";

const AboutUs: React.FC = () => {
  const AboutUsTitle = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "16px",
    fontWeight: 600,
    color: "#FF64AE",
    textTransform: "none",
  });

  const WeAreTheBestAboutUs = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "36px",
    fontWeight: 600,
    color: "#091156",
    textTransform: "none",
  });

  const DescAboutUs = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "16px",
    fontWeight: 400,
    color: "#8B8B8B",
    textTransform: "none",
  });
  const LearnMoreButton = styled(Button)({
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

  const WatchVideoButton = styled(Button)({
    fontSize: 16,
    fontWeight: 500,
    color: "#8B8B8B",
    textTransform: "none",
    width: "213px",
    height: "58.36px",
  });

  return (
    <Box
      sx={{ px: 2, display: "inline-flex", pl: 4 }}
      py={4}
      justifyContent={"center"}
    >
      <Stack
        spacing={2}
        gap={8}
        direction={{ xs: "column", md: "column", lg: "row" }}
      >
        <Grid item xs="auto">
          <Grid container direction="column" spacing={8}>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <AboutUsTitle>About Us</AboutUsTitle>
                </Grid>
                <Grid item>
                  <WeAreTheBestAboutUs>
                    We are the best beauty clinic
                  </WeAreTheBestAboutUs>
                </Grid>
                <Grid item>
                  <DescAboutUs>
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit. Elit, quam suscipit purus donec
                    <br /> amet. Egestas volutpat facilisi eu libero. Nunc,
                    <br /> ipsum ornare mauris sit quam quis enim. Varius tellus
                    <br /> in suspendisse placerat.
                    <br />
                    <br />
                    Id dui erat sed quam tellus in purus. Pellentesque
                    <br /> congue fringilla cras tellus enim.
                  </DescAboutUs>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* Button  */}
              <Stack direction="row" spacing={2}>
                <LearnMoreButton variant="contained">
                  Learn More
                </LearnMoreButton>
                <Box>
                  <WatchVideoButton variant="text">
                    <Box>
                      <svg
                        width="49"
                        height="50"
                        viewBox="0 0 49 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginTop: "10px" }}
                      >
                        <circle
                          cx="24.5"
                          cy="24.9382"
                          r="24.5"
                          fill="#091156"
                        />
                        <path
                          d="M32.1167 23.6145C33.45 24.3843 33.45 26.3088 32.1167 27.0786L22.8042 32.4551C21.4708 33.2249 19.8042 32.2627 19.8042 30.7231L19.8042 19.9699C19.8042 18.4303 21.4708 17.4681 22.8042 18.2379L32.1167 23.6145Z"
                          fill="white"
                        />
                      </svg>
                    </Box>
                    <Box ml="14px">Watch Video</Box>
                  </WatchVideoButton>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} justifyContent={"flex-end"}>
          <Box sx={{ ml: "-85px" }}>
            <ThumbnailAboutUs />
          </Box>
        </Grid>
      </Stack>
    </Box>
  );
};

export default AboutUs;
