import React from "react";
import Layout from "../components/layout";
import { Container, Stack } from "@mui/material";
import RegistrationForm from "../components/registrationForm";

export default function Register() {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <RegistrationForm />
    </Container>
  );
}

Register.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
