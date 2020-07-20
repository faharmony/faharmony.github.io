import React from "react";
import { Skeleton, Box } from "@faharmony/components";

export default () => (
  <Box
    style={{
      padding: "20px",
      flexWrap: "wrap",
    }}
  >
    <Skeleton width="400px" height="20px" />
    <Skeleton width="400px" height="40px" />
    <Skeleton width="400px" height="60px" />
    <Skeleton width="400px" height="20px" />
  </Box>
);
