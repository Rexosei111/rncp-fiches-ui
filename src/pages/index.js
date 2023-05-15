import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../components/layout";
import SearchBar from "../components/searchBar";
import Head from "next/head";
import { Stack } from "@mui/material";

export default function Index() {
  return (
    <>
      <Head>
        <title>RNCP Fiches | Search</title>
      </Head>
      <Container
        maxWidth="md"
        gap={2}
        sx={{
          bgcolor: "transparent",
          minHeight: "77vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          my={2}
          textAlign={{ xs: "center" }}
          width={{ xs: "100%", lg: "100%" }}
          fontWeight={700}
        >
          Toute la data de l’enseignement et de la formation professionnelle
        </Typography>
        <SearchBar />
      </Container>
    </>
  );
}

Index.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
