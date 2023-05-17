import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { Box } from "@mui/material";
import Iframe from "react-iframe";
// import { RedocStandalone } from "redoc";

export default function APIDocs() {
  return (
    <>
      <Head>
        <title>API Documentation</title>
      </Head>
      <Box width={"100%"} height={"89.8vh"}>
        <Iframe
          frameBorder={0}
          allowFullScreen
          overflow="hidden"
          display="block"
          title="API Documentation"
          width="100%"
          height="100%"
          url={`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/fiches-redoc`}
        ></Iframe>
      </Box>
      {/* <RedocStandalone
        specUrl={`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/fiches-openapi`}
        options={{
          theme: { colors: { primary: { main: "#FF8300" } } },
        }}
      /> */}
    </>
  );
}

APIDocs.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
