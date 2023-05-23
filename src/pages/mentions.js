import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { Container, Stack, Typography } from "@mui/material";

export default function Mentions() {
  return (
    <>
      <Head>
        <title>Mentions Légales</title>
      </Head>
      <Container maxWidth={"lg"} sx={{ minHeight: "75vh" }}>
        <Stack
          flexDirection={"column"}
          gap={0}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          minHeight={"inherit"}
        >
          <Typography
            variant="h5"
            textAlign={"center"}
            width={{ xs: "100%", md: "80%" }}
          >
            Ce service vous est proposé par la société Albatros, SASU
            immatriculée au RCS de PARIS sous le numéro 901884890.
          </Typography>
          <Typography variant="subtitle2">Bureau 562</Typography>
          <Typography variant="subtitle2">59, rue de Ponthieu</Typography>
          <Typography variant="subtitle2">75008 Paris</Typography>
          <Typography variant="subtitle2">
            Contact :{" "}
            <a
              href="mailto:alexis.dana@formadata.fr"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              alexis.dana@formadata.fr
            </a>
          </Typography>
          <Typography variant="subtitle2">
            Ce site est hébergé par :{" "}
            <a href="#" target="_blank" style={{ textDecoration: "none" }}></a>
          </Typography>
        </Stack>
      </Container>
    </>
  );
}

Mentions.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
