import { Box, Button, Paper, Stack } from "@mui/material";
import React from "react";
import DrawerAppBar from "./topBar";
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "./footer";

const footerContent = [
  { name: "À propos", url: "/contact" },
  { name: "Contact", url: "/contact" },
  { name: "Mentions légales", url: "#" },
];
export default function Layout({ children }) {
  const router = useRouter();
  const path = router.pathname;
  return (
    <Stack
      flexDirection={"column"}
      sx={{
        minHeight: "100vh",
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
      <Footer />
    </Stack>
  );
}
