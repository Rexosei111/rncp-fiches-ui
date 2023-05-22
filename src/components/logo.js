import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        // flexGrow: 1,
        display: {
          textDecoration: "none",
          fontWeight: 600,
          fontSize: 30,
        },
      }}
    >
      <Stack gap={0.5} flexDirection={"row"} alignItems={"center"}>
        <Image
          src="/favicon_io/android-chrome-192x192.png"
          width={40}
          height={50}
        />
        <Typography
          variant="h6"
          fontWeight={700}
          component="span"
          color={"#000000"}
        >
          ormadata
        </Typography>
      </Stack>
    </Box>
  );
}
