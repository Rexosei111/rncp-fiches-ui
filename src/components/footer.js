import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const footerContent = [
  { name: "À propos", url: "/contact" },
  { name: "Contact", url: "/contact" },
  { name: "Mentions légales", url: "/mentions" },
];

export default function Footer() {
  return (
    <Stack
      component={"footer"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"flex-start"}
      justifyContent={"center"}
      p={2}
      gap={3}
      minHeight={"10vh"}
      color={"white"}
      bgcolor={(theme) => theme.palette.primary.main}
    >
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        gap={2}
      >
        {footerContent.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: 700,
            }}
          >
            {item.name}
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
