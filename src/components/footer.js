import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const footerContent = [
  { name: "À propos", url: "/contact" },
  { name: "Contact", url: "/contact" },
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
      //   flexWrap={{ xs: "wrap", md: "nowrap" }}
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
      <Stack
        flexDirection={"column"}
        gap={0}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        maxWidth={270}
      >
        <Typography
          variant="caption"
          fontSize={15}
          gutterBottom
          fontWeight={700}
        >
          Mentions Légales
        </Typography>
        <Typography variant="subtitle2">
          Ce service vous est proposé par la société Albatros, SASU immatriculée
          au RCS de PARIS sous le numéro 901884890.
        </Typography>
        <Typography variant="subtitle2">Bureau 562</Typography>
        <Typography variant="subtitle2">59, rue de Ponthieu</Typography>
        <Typography variant="subtitle2">75008 Paris</Typography>
        <Typography variant="subtitle2">
          Contact : alexis.dana@formadata.fr
        </Typography>
      </Stack>
    </Stack>
  );
}
