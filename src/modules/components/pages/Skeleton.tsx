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
    {/* <div style={{ width: "400px" }}>
      <Skeleton />
    </div> */}
    <Skeleton width="60px" height="60px" circle />
  </Box>
);
