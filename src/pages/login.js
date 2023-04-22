import React from "react";
import Layout from "../components/layout";
import { Container, Stack } from "@mui/material";
import Form from "../components/Login/form";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Welcome | Login to your account</title>
      </Head>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "transparent",
          minHeight: "89vh",
        }}
      >
        <Form />
      </Container>
    </>
  );
}

Login.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
