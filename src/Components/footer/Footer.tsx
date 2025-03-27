import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import MainLogoBlue from "../../Assets/mainLogoWhite";
import MainLogoWhite from "../../Assets/mainLogoWhite";
import CaretRight from "../../Assets/caretRight";
import FbColorBgIcon from "./fbColorBg";
import InstagramColorBgIcon from "./instagramColorBg";
import LinkedinColorBgIcon from "./linkedinColorBg";
import TwitterColorBgIcon from "./twitterColorBg";
import YoutubeColorBgIcon from "./youtubeColorBg";

const Footer: React.FC = () => {
  const BeauticeIsABeauty = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "16px",
    fontWeight: 400,
    color: "#D7DBFF",
    textTransform: "none",
  });

  const Address = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "14px",
    fontWeight: 500,
    color: "#D7DBFF",
    textTransform: "none",
    fontStyle: "italic",
  });
  const MailTo = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "14px",
    fontWeight: 500,
    color: "#D7DBFF",
    textTransform: "none",
    fontStyle: "italic",
    textDecoration: "underline",
  });
  const PgaeInfo = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "18px",
    fontWeight: 600,
    color: "#FFFFFF",
    textTransform: "none",
  });
  const DescPgaeInfo = styled(Typography)({
    fontFamily: "poppins",
    fontSize: "16px",
    fontWeight: 400,
    color: "#D7DBFF",
    textTransform: "none",
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        displat: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      gap={4}
    >
      {/* 1111111  */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
        gap={2}
      >
        {/* Logo + address + phone number + mail  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          gap={3}
        >
          {/* logo  */}
          <MainLogoWhite />
          <Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
            <BeauticeIsABeauty>
              <span style={{ fontWeight: "700" }}>Beautice</span> is a Beauty
              Clinic WordPress Theme.
            </BeauticeIsABeauty>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Address>Baker Steet 101, NY, United States.</Address>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Address>+521 569 8966</Address>
                <MailTo>mail@company.com</MailTo>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Logo + address + phone number + mail  */}
        {/* .
      . 
      .  */}
        {/* page  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          gap={2}
        >
          <PgaeInfo>Page</PgaeInfo>
          <Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CaretRight />
              <DescPgaeInfo>Home</DescPgaeInfo>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CaretRight />
              <DescPgaeInfo>About</DescPgaeInfo>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CaretRight />
              <DescPgaeInfo>Services</DescPgaeInfo>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CaretRight />
              <DescPgaeInfo>Gallery</DescPgaeInfo>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CaretRight />
              <DescPgaeInfo>Team</DescPgaeInfo>
            </Box>
          </Box>
        </Box>
        {/* page  */}
        {/* .
      . 
      .  */}
        {/* infomation  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          gap={2}
        >
          <PgaeInfo>Infomation</PgaeInfo>
          <Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CaretRight />
              <DescPgaeInfo>Terms & conditions</DescPgaeInfo>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CaretRight />
              <DescPgaeInfo>Privacy policy</DescPgaeInfo>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CaretRight />
              <DescPgaeInfo>Blog</DescPgaeInfo>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CaretRight />
              <DescPgaeInfo>Contact</DescPgaeInfo>
            </Box>
          </Box>
        </Box>
        {/* infomation  */}
      </Box>
      {/* 1111111  */}
      {/* . 
      . 
      .  */}
      {/* 2222222 */}
      <Box
        sx={{ display: "flex", justifyContent: "end" }}
        onClick={scrollToTop}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" rx="5" fill="#FF64AE" />
          <path
            d="M11.3519 19.1775L10.5715 18.3971C10.241 18.0666 10.241 17.5322 10.5715 17.2053L17.4023 10.3709C17.7328 10.0404 18.2672 10.0404 18.5941 10.3709L25.425 17.2018C25.7554 17.5322 25.7554 18.0666 25.425 18.3936L24.6445 19.174C24.3105 19.508 23.7656 19.501 23.4386 19.16L19.4062 14.9271V25.0311C19.4062 25.4986 19.0301 25.8748 18.5625 25.8748H17.4375C16.9699 25.8748 16.5937 25.4986 16.5937 25.0311V14.9271L12.5578 19.1635C12.2308 19.508 11.6859 19.515 11.3519 19.1775Z"
            fill="white"
          />
        </svg>
      </Box>
      {/* 2222222 */}
      {/* . 
      . 
      .  */}
      {/* 3333333 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }} gap={4}>
          <FbColorBgIcon />
          <TwitterColorBgIcon />
          <LinkedinColorBgIcon />
          <YoutubeColorBgIcon />
          <InstagramColorBgIcon />
        </Box>
        <Box marginX="auto">
          <DescPgaeInfo>
            © AltDesain Studio 2021 - All right reserved.
          </DescPgaeInfo>
        </Box>
      </Box>
      {/* 3333333 */}
      {/* . 
      . 
      .  */}
    </Box>
  );
};

export default Footer;
