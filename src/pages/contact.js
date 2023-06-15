import React from "react";
import Layout from "../components/layout";
import { Container, Typography, Stack, Button } from "@mui/material";
import Head from "next/head";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Container maxWidth={"lg"} sx={{ minHeight: "79vh", py: 2 }}>
        <Stack
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={"50vh"}
        >
          <Typography variant="h5" gutterBottom textAlign={"center"}>
            Formadata est une société de conseil dédiée à l'univers de la
            formation (formation initiale, formation continue...) qui intervient
            pour le compte d'un large panel de clients : établissements
            d'enseignement supérieur publics, organismes de formations privés,
            administrations...
          </Typography>
          <Typography variant="subtitle2" fontSize={16}>
            Vous avez des questions ? Un projet ?
          </Typography>
          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            component="a"
            href={"mailto:alexis.dana@formadata.fr"}
          >
            Discutons en !
          </Button>
        </Stack>
      </Container>
    </>
  );
}

Contact.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
