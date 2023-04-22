import Layout from "@/components/components/layout";
import { Container, Paper, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function FicheDetails() {
  const router = useRouter();
  const { rncp } = router.query;
  return (
    <>
      <Head>
        <title>{rncp}</title>
      </Head>
      <Paper
        sx={{
          width: "100%",
          minHeight: 350,
          borderRadius: 0,
          background: "rgb(7, 44, 71)",
          background:
            "linear-gradient(70deg, rgba(7,44,71,1) 0%, rgba(67,95,116,1) 60%, rgba(100,142,173,1) 92%, rgba(107,160,185,1) 100%)",
        }}
        elevation={0}
      >
        <Container maxWidth={"md"}>
          <Typography
            variant="h4"
            color={(theme) => theme.palette.common.white}
          >
            {rncp}
          </Typography>
        </Container>
      </Paper>
    </>
  );
}

FicheDetails.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
