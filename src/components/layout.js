import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import DrawerAppBar from "./topBar";

export default function Layout({ children }) {
  return (
    <Stack
      flexDirection={"column"}
      sx={{
        minHeight: "100vh",
        background: "rgb(217,234,238)",
        background:
          "linear-gradient(25deg, rgba(217,234,238,1) 0%, rgba(225,234,240,1) 15%, rgba(255,255,255,1) 92%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Box>
        <DrawerAppBar />
      </Box>
      <Paper
        sx={{
          flexGrow: 2,
          borderRadius: 0,
          bgcolor: "transparent",
        }}
        elevation={0}
      >
        {children}
      </Paper>
      {/* <Box component={"footer"}>
        <Typography>Footer</Typography>
      </Box> */}
    </Stack>
  );
}
