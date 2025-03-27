import { Box } from "@mui/material";
import React from "react";
import thumbnail from "./../Assets/unsplash_LRXYS0tSyGc.png";

const ThumbnailAboutUs: React.FC = () => {
  return (
    <Box sx={{mr:4, top:0}}>
      <img src={thumbnail} alt="thumbnail" />
    </Box>
  );
};

export default ThumbnailAboutUs;
