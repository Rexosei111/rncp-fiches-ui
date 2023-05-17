import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { RedocStandalone } from "redoc";

export default function APIDocs() {
  return (
    <>
      <Head>
        <title>API Documentation</title>
      </Head>
      <RedocStandalone
        specUrl={`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/fiches-openapi`}
        options={{
          theme: { colors: { primary: { main: "#FF8300" } } },
        }}
      />
    </>
  );
}

APIDocs.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
