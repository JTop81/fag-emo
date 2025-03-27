import { Box } from '@mui/material'
import React from 'react'


const CaretRight: React.FC = () => {
  return (
    // <div sx={{ position: "absolute", zIndex: -10, left: 0, display: "inline-flex"}}>
    // <div tw="relative [z-index: -8] bottom-0">
    <Box sx={{ alignItems: "center" }}>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z"
          fill="#D7DBFF"
        />
      </svg>
    </Box>
  );
}

export default CaretRight
