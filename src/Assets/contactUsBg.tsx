import { Box } from "@mui/material";
import React from "react";

const ContactUsBg: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: -10,
        left: 0,
        display: "inline-flex",
        mt: "700px",
      }}
    >
      <svg
        width="1176"
        height="100%"
        viewBox="0 0 1176 929"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M246.555 126.218C85.6647 97.065 53.2506 47.8098 -0.327515 0V619.615C35.2166 663.473 111.197 737.847 153.055 771.842C221.341 827.301 386.957 908.769 521.429 919.861C620.133 928.002 947.278 966.906 1098.56 786.376C1337.47 501.273 952.05 288.138 852.727 252.818C559.096 148.402 360.54 146.872 246.555 126.218Z"
          fill="url(#paint0_linear_97_171)"
        />
        <path
          d="M214.806 139.092C74.6061 113.22 46.3605 69.5089 -0.327454 27.0801V576.957C30.6456 615.879 96.855 681.882 133.33 712.05C192.835 761.268 337.153 833.567 454.332 843.41C540.342 850.635 825.417 885.16 957.243 724.949C1165.43 471.935 829.576 282.788 743.025 251.444C487.154 158.779 314.133 157.421 214.806 139.092Z"
          fill="url(#paint1_linear_97_171)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_97_171"
            x1="582.112"
            y1="0"
            x2="582.112"
            y2="942.288"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EAECFF" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_97_171"
            x1="507.211"
            y1="27.0801"
            x2="507.211"
            y2="863.313"
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

export default ContactUsBg;
