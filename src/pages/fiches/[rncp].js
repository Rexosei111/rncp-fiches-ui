import DetailSkeleton from "@/components/components/details/skeleton";
import Layout from "@/components/components/layout";
import {
  Box,
  Breadcrumbs,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

export default function FicheDetails() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [rncpData, setRncpData] = useState({});
  const { rncp } = router.query;
  useEffect(() => {
    async function fetchRncp() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          process.env.NEXT_PUBLIC_API_BASE_URL + "api/v1/private/fiches/" + rncp
        );
        setLoading(false);
        setRncpData(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchRncp();
  }, [rncp]);
  return (
    <>
      <Head>
        <title>{rncp}</title>
      </Head>
      {loading && <DetailSkeleton />}
      {!loading && (
        <Container maxWidth={"lg"} sx={{ minHeight: "79vh" }}>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={350}
          >
            <Stack
              component={Paper}
              flexDirection={"row"}
              gap={5}
              p={3}
              elevation={10}
              sx={{ minHeight: 300, width: "100%", borderRadius: 3 }}
            >
              <Stack
                width={"100%"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Typography
                  variant="h1"
                  fontSize={28}
                  fontWeight={500}
                  textAlign={"center"}
                  gutterBottom
                >
                  {rncpData?.intitule}
                </Typography>
                <Stack
                  width="100%"
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Breadcrumbs separator="-">
                    <Typography textAlign={"center"} color={"#5A606F"}>
                      {rncpData?.numero_fiche}
                    </Typography>
                    <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                      <Typography
                        color={rncpData?.Statut ? "#00C408" : "#F0000E"}
                      >
                        {rncpData.Statut ? "Fiche Active" : "Fiche Inactive"}{" "}
                      </Typography>
                      {rncpData.Statut ? (
                        <CheckCircleOutlineRoundedIcon
                          fontSize="small"
                          htmlColor="#00C408"
                        />
                      ) : (
                        <HighlightOffRoundedIcon
                          fontSize="small"
                          htmlColor="#F0000E"
                        />
                      )}
                    </Stack>
                  </Breadcrumbs>
                </Stack>
                <Stack
                  width={"100%"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  my={2}
                >
                  {rncpData?.ancienne_certification && (
                    <Typography
                      variant="caption"
                      fontSize={14}
                      color={"#5A606F"}
                    >
                      Certification antérieure :{" "}
                      {rncpData?.ancienne_certification}
                    </Typography>
                  )}
                  {rncpData?.nouvelle_certification && (
                    <Typography
                      variant="caption"
                      fontSize={14}
                      color={"#5A606F"}
                    >
                      Remplacée par : {rncpData?.nouvelle_certification}
                    </Typography>
                  )}
                </Stack>
              </Stack>
              <Stack width={"100%"}></Stack>
            </Stack>
          </Stack>
        </Container>
      )}
    </>
  );
}

FicheDetails.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
