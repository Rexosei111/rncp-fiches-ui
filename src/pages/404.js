import { Container, Typography, useMediaQuery } from "@mui/material";
import Head from "next/head";
import React from "react";
import fiche404 from "../../public/404.svg";
import Layout from "../components/layout";
import Image from "next/image";

export default function NotFound() {
  const small = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const xsmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <Container
        maxWidth={"lg"}
        sx={{
          minHeight: "79vh",
          py: { xs: 0, md: 2 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          textTransform={"capitalize"}
          fontSize={40}
          fontWeight={700}
          textAlign={"center"}
        >
          Page not found
        </Typography>
        <Image
          src={fiche404}
          height={xsmall ? 200 : small ? 300 : 350}
          alt="404"
        />
      </Container>
    </>
  );
}

NotFound.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
