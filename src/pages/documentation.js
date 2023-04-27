import React, { useEffect } from "react";
import Layout from "../components/layout";
import Iframe from "react-iframe";
import { Box } from "@mui/material";
import Head from "next/head";

export default function APIDocs() {
  return (
    <>
      <Head>
        <title>API Documentation</title>
      </Head>
      <Box width={"100%"} py={-5}>
        <Iframe
          frameBorder={0}
          allowFullScreen
          overflow="hidden"
          display="block"
          title="API Documentation"
          width="100%"
          height="100%"
          url={`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/redoc`}
        ></Iframe>
      </Box>
    </>
  );
}

APIDocs.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
