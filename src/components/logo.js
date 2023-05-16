import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        flexGrow: 1,
        display: {
          textDecoration: "none",
          fontWeight: 600,
          fontSize: 30,
        },
      }}
    >
      <Box width={"5%"} bgcolor={"#FF8300"} p={1} component="span">
        <Typography
          variant="h4"
          fontWeight={700}
          color={"white"}
          textAlign={"center"}
          component={"span"}
          textTransform={"uppercase"}
        >
          F
        </Typography>
      </Box>
      <Typography
        variant="h6"
        fontWeight={700}
        component="span"
        ml={0.5}
        color={"#000000"}
      >
        ormadata
      </Typography>
    </Box>
  );
}
