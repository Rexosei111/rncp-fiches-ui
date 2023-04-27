import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Email, EmailOutlined, PersonOutline } from "@mui/icons-material";
import BasicDetailsList from "../components/profile/basicDetails/basicDetailsList";
import { useAuthToken, useProfile } from "../utils";
import APIKeyDetails from "../components/profile/basicDetails/apiKeyDetail";

export default function Profile() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/login?callbackUrl=" + window.location.pathname);
    },
  });

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Container maxWidth="md">
        <Typography variant="h4">Your details</Typography>
        <BasicDetailsList />
        <APIKeyDetails />
      </Container>
    </>
  );
}

Profile.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
