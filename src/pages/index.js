import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../components/layout";
import SearchBar from "../components/searchBar";

export default function Index() {
  return (
    <Container maxWidth="md" sx={{ bgcolor: "transparent" }}>
      <Typography
        variant="h3"
        my={2}
        textAlign={{ xs: "center", lg: "left" }}
        width={{ xs: "100%", lg: "70%" }}
        fontWeight={700}
      >
        Qui ex elit aliquip mollit nulla eiusmod.
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign={{ xs: "center", lg: "left" }}
        color={"GrayText"}
        width={{ xs: "100%", lg: "70%" }}
      >
        Deserunt do velit eiusmod commodo id id aute ullamco aliqua elit duis
        excepteur irure incididunt. Dolore laboris do non eu ad.
      </Typography>
      <SearchBar />
    </Container>
  );
}

Index.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
