import { Box, Button } from "@mui/material";
import React from "react";

export function ButtonPage() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      sx={{
        display: "flex",
        backgroundColor: "#EBEBEB",
        height: "400px",
        width: "100%",
        p: 3,
        gap: "2rem"
      }}
    >
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="primary">Primary</Button>
    </Box>
  );
}
