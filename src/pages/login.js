import React from "react";
import Layout from "../components/layout";
import { Container, Stack } from "@mui/material";
import Form from "../components/Login/form";

export default function Login() {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Form />
    </Container>
  );
}

Login.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};