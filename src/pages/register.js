import React from "react";
import Layout from "../components/layout";
import { Container } from "@mui/material";
import RegistrationForm from "../components/registrationForm";
import Head from "next/head";

export default function Register() {
  return (
    <>
      <Head>
        <title>Create a new account</title>
      </Head>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "89vh",
        }}
      >
        <RegistrationForm />
      </Container>
    </>
  );
}

Register.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
