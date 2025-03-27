import { Box } from "@mui/material";
import React from "react";

const AboutUsBg: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: -10,
        right: 0,
        display: "inline-flex",
        mt:"555px"
      }}
    >
      <svg
        width="947"
        height="100%"
        viewBox="0 0 947 1029"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M749.052 139.789C878.799 107.501 904.939 52.9503 948.146 0V686.236C919.482 734.809 858.209 817.18 824.454 854.83C769.386 916.252 635.827 1006.48 527.385 1018.76C447.787 1027.78 183.967 1070.87 61.9698 870.927C-130.695 555.17 180.119 319.118 260.216 280.001C497.01 164.358 657.131 162.663 749.052 139.789Z"
          fill="url(#paint0_linear_97_95)"
        />
        <path
          d="M762.475 145.548C883.394 115.453 907.755 64.6053 948.022 15.2497V654.898C921.309 700.174 864.205 776.952 832.746 812.046C781.425 869.299 656.954 953.401 555.89 964.851C481.708 973.256 235.838 1013.42 122.141 827.05C-57.4153 532.73 232.251 312.704 306.898 276.242C527.581 168.449 676.808 166.87 762.475 145.548Z"
          fill="url(#paint1_linear_97_95)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_97_95"
            x1="478.448"
            y1="0"
            x2="478.448"
            y2="1043.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EAECFF" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_97_95"
            x1="510.283"
            y1="15.2497"
            x2="510.283"
            y2="988.003"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E4E7FF" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};

export default AboutUsBg;
