import { Box, Button, Grid, Stack, styled } from "@mui/material";
import MainLogo from "../../Assets/mainLogo";

export default function Navbar() {
  const ContactUsButton = styled(Button)({
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
    width: "158px",
    height: "52px",
  });
  const NavButton = styled(Button)({
    fontSize: 16,
    fontWeight: 500,
    color: "#8B8B8B",
    textTransform: "none",
  });
    const HomeNavButton = styled(Button)({
      fontSize: 16,
      fontWeight: 500,
      color: "#41487F",
      textTransform: "none",
    });

  return (
    <Box sx={{ px: 0, display: "flex" }} py={4}>
      {/* <image src={mainLogo}></image> */}
      <Grid container direction={{xs: "column", md: "column", lg: "row" }}>
        <Grid item xs={4} pl={4} pt={1} order={1}>
          {/* logo  */}
          <MainLogo />
        </Grid>
        <Grid item xs={5} order={2}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={4}
            justifyContent="flex-end"
            pr={4}
            pt={1}
            fontWeight={"regular"}
          >
            <HomeNavButton variant="text">
              Home
              <Box
                sx={{
                  pl: 1,
                }}
              >
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="3.5"
                    y1="2.18557e-08"
                    x2="3.5"
                    y2="7"
                    stroke="#41487F"
                  />
                  <line
                    x1="7"
                    y1="3.5"
                    x2="-4.37114e-08"
                    y2="3.5"
                    stroke="#41487F"
                  />
                </svg>
              </Box>
            </HomeNavButton>
            <NavButton variant="text">About</NavButton>
            <NavButton variant="text">Service</NavButton>
            <NavButton variant="text">Gallery</NavButton>
            <NavButton variant="text">Blog</NavButton>
            <ContactUsButton variant="contained">Contact</ContactUsButton>
          </Stack>
        </Grid>
        {/* <Grid item xs={2} pl={4} order={3} justifyContent="flex-end">
          <ContactUsButton variant="contained">Contact</ContactUsButton>
        </Grid> */}
      </Grid>
    </Box>
  );
}
