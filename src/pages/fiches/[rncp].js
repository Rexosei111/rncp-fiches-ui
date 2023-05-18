import DetailSkeleton from "@/components/components/details/skeleton";
import Layout from "@/components/components/layout";
import {
  Breadcrumbs,
  Container,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import BlocDate from "@/components/components/blocDate";
import CardWrapper from "@/components/components/details/cardWrapper";
import Indexes from "@/components/components/details/indexes";
import Infos from "@/components/components/details/infos";
import Link from "next/link";
import { Lato } from "next/font/google";
import Certificateurs from "@/components/components/details/certificateurs";
import Partenaires from "@/components/components/details/partenaires";
import CertDescription from "@/components/components/details/certDescription";
import BlocCompetence from "@/components/components/details/blocCompetence";
import StatistiqueTable from "@/components/components/details/statistiqueTable";

const LatoStyle = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export default function FicheDetails({ numero_fiche }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [rncpData, setRncpData] = useState({});
  const [blocDate, setBlocDate] = useState({});
  const { rncp } = router.query;
  useEffect(() => {
    async function fetchRncp() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          process.env.NEXT_PUBLIC_API_BASE_URL + "/private/fiches/" + rncp
        );
        setLoading(false);
        setRncpData(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchRncp();
  }, []);

  const calculateFontSize = (text) => {
    const words = text.split(" ");
    const textLength = words.length;
    const baseFontSize = 20; // Set your base font size here
    const maxFontSize = 35; // Set the maximum font size here

    // Adjust the font size based on the length of the text
    const fontSize = Math.max(baseFontSize, maxFontSize - textLength);

    return fontSize;
  };
  useEffect(() => {
    setBlocDate({
      date_dernier_jo: rncpData?.date_dernier_jo,
      date_decision: rncpData?.date_decision,
      date_effet: rncpData?.date_effet,
      date_publication: rncpData?.date_publication,
      duree_enregistrement: rncpData?.duree_enregistrement,
      date_fin_enregistrement: rncpData?.date_fin_enregistrement,
      date_limite_delivrance: rncpData?.date_limite_delivrance,
    });
  }, [rncpData]);
  return (
    <>
      <Head>
        <title>{rncp}</title>
      </Head>
      {loading && <DetailSkeleton />}
      {!loading && (
        <Container maxWidth={"lg"} sx={{ minHeight: "79vh", py: 2 }}>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={350}
          >
            <Stack
              component={Paper}
              flexDirection={"row"}
              justifyContent={"space-between"}
              gap={{ xs: 1, md: 5 }}
              p={{ xs: 1, md: 3 }}
              elevation={10}
              width={"100%"}
              flexWrap={{ xs: "wrap", md: "nowrap" }}
              sx={{ minHeight: 300, borderRadius: 3 }}
            >
              <Stack
                width={"100%"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Tooltip title={rncpData?.intitule}>
                  <Typography
                    variant="h1"
                    fontSize={
                      rncpData?.intitule &&
                      calculateFontSize(rncpData?.intitule)
                    }
                    fontWeight={600}
                    textAlign={"center"}
                    fontFamily={LatoStyle.style.fontFamily}
                    gutterBottom
                  >
                    {rncpData?.intitule}
                  </Typography>
                </Tooltip>
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
                        color={rncpData?.statut ? "#00C408" : "#F0000E"}
                      >
                        {rncpData.statut ? "Fiche Active" : "Fiche Inactive"}{" "}
                      </Typography>
                      {rncpData.statut ? (
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
                  flexDirection={{ xs: "column", md: "row" }}
                  // flexWrap={{ xs: "wrap", lg: "nowrap" }}
                  justifyContent={{ xs: "center", md: "space-between" }}
                  my={2}
                >
                  {rncpData?.ancienne_certification && (
                    <Typography
                      variant="caption"
                      fontSize={14}
                      color={"#5A606F"}
                      component={Link}
                      textAlign={"center"}
                      href={"/fiches/" + rncpData?.ancienne_certification}
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
                      component={Link}
                      textAlign={"center"}
                      ml={{ xs: 0, md: "auto" }}
                      href={"/fiches/" + rncpData?.nouvelle_certification}
                    >
                      Remplacée par : {rncpData?.nouvelle_certification}
                    </Typography>
                  )}
                </Stack>
              </Stack>
              <Stack
                width={"100%"}
                p={2}
                alignItems={{ xs: "flex-start", md: "center" }}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <BlocDate data={blocDate} />
              </Stack>
            </Stack>
          </Stack>
          <Stack flexDirection={"column"} gap={5} my={3}>
            <Stack
              gap={5}
              flexDirection={"row"}
              flexWrap={{ xs: "wrap", md: "nowrap" }}
            >
              <CardWrapper title={"Index"} id={"indexes"}>
                <Indexes />
              </CardWrapper>
              <CardWrapper title={"Informations de référence"} id={"reference"}>
                <Infos fiche={rncpData} />
              </CardWrapper>
            </Stack>
            <Stack
              gap={5}
              flexDirection={"row"}
              my={2}
              flexWrap={{ xs: "wrap", md: "nowrap" }}
            >
              <CardWrapper title={"Certificateur"} id={"certificateur"}>
                <Certificateurs
                  certificateurs={rncpData?.fiches_certificateurs}
                />
              </CardWrapper>
              <CardWrapper title={"Partenaire"} id={"partenaires"}>
                <Partenaires partenaires={rncpData?.fiches_partenaires} />
              </CardWrapper>
            </Stack>
            <CardWrapper
              title={"Description de la certification"}
              width={"100%"}
              id={"certDescription"}
            >
              <CertDescription descriptions={rncpData?.fiches_descriptions} />
            </CardWrapper>
            <CardWrapper
              title={"Blocs de compétences"}
              width={"100%"}
              id={"blocCompetence"}
            >
              <BlocCompetence code_blocs={rncpData?.blocs_competences} />
            </CardWrapper>
            <CardWrapper
              title={"Statistiques"}
              width={"100%"}
              id={"statistiques"}
            >
              <StatistiqueTable
                statistiques={rncpData?.statistiques_promotion}
              />
            </CardWrapper>
          </Stack>
        </Container>
      )}
    </>
  );
}

FicheDetails.getInitialProps = async (context) => {
  return {
    numero_fiche: context.query.rncp,
  };
};

FicheDetails.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
