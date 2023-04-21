import React from "react";
import Layout from "../components/layout";
import { Container } from "@mui/material";

export default function Login() {
  return <Container>Login</Container>;
}

Login.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
