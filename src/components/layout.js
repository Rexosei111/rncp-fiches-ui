import { Box, Button, Paper, Stack } from "@mui/material";
import React from "react";
import DrawerAppBar from "./topBar";
import { useRouter } from "next/router";
import Link from "next/link";

const footerContent = [
  { name: "FAQ", url: "#" },
  { name: "À propos", url: "#" },
  { name: "Mentions légales", url: "#" },
  { name: "Contact", url: "#" },
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
      <Stack
        component={"footer"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        minHeight={"10vh"}
        flexWrap={"wrap"}
        color={"white"}
        bgcolor={(theme) => theme.palette.primary.main}
      >
        {footerContent.map((item, index) => (
          <Button
            key={index}
            variant="text"
            disableElevation
            disableFocusRipple
            disableRipple
            component={Link}
            href={item.url}
            sx={{
              color: "white",
              textTransform: "capitalize",
            }}
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
