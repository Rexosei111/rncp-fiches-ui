import React from "react";
import Layout from "../components/layout";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Head from "next/head";
import exportImg from "../../public/export.svg";
import Image from "next/image";
export default function Export() {
  return (
    <>
      <Head>
        <title>Export</title>
      </Head>
      <Container maxWidth={"lg"} sx={{ minHeight: "79vh", py: 2 }}>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          gap={2}
          minHeight={"inherit"}
          justifyContent={{ xs: "center", md: "center" }}
          alignItems={{ xs: "center", md: "center" }}
        >
          <Box width={{ xs: "100%", md: "50%" }}>
            <Typography
              variant="h3"
              gutterBottom
              color={(theme) => theme.palette.primary.main}
            >
              Besoin d'exports personnalisés de la data présente sur le site ?
            </Typography>
            <Typography variant="subtitle2" fontSize={15}>
              Besoin d'associer à la data du site des informations
              complémentaires ?
            </Typography>
            <Typography variant="subtitle2" fontSize={15}>
              Notre équipe d'analystes peut vous accompagner.
            </Typography>
            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              component={"a"}
              target="_blank"
              href={`mailto:alexis.dana@formadata.fr`}
            >
              Contactez-nous
            </Button>
          </Box>
          <Box
            width={{ xs: "0%", sm: "100%", md: "50%" }}
            height={{ xs: 0, sm: "50vh" }}
            position="relative"
          >
            <Image
              src={exportImg}
              priority
              alt="export image"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
}

Export.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
