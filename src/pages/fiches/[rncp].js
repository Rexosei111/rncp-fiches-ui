import Layout from "@/components/components/layout";
import {
  Badge,
  Box,
  Breadcrumbs,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import axios, { isAxiosError } from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { clipText, transformDate } from "@/components/utils";
import { Roboto_Condensed } from "next/font/google";
import Certificateurs from "@/components/components/details/certificates";
import CertificateDescription from "@/components/components/details/certDescription";
import BlocCompetence from "@/components/components/details/blocCompetence";
import Image from "next/image";
import detailInfo from "../../../public/detail_analysis.svg";
import LinkIcon from "@mui/icons-material/Link";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export default function FicheDetails({ fiche }) {
  const router = useRouter();
  const { rncp } = router.query;

  return (
    <>
      <Head>
        <title>{rncp}</title>
      </Head>
      <Paper
        sx={{
          width: "100%",
          minHeight: 450,
          borderRadius: 0,
        }}
        elevation={0}
      >
        <Stack flexDirection={"row"} height={"100%"} gap={{ xs: 0, md: 2 }}>
          <Paper
            elevation={24}
            sx={{
              bgcolor: "#1976d2e0",
              borderRadius: { xs: 0, md: "0px 10px 10px 0px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: 2,
              color: "white",
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              variant="h3"
              textAlign={"center"}
              gutterBottom
              zIndex={2}
              fontFamily={roboto_condensed.style.fontFamily}
            >
              {clipText(fiche.intitule)}
            </Typography>
            <Stack
              width={"100%"}
              flexDirection={"row"}
              flexWrap={{ xs: "wrap", md: "nowrap" }}
              gap={2}
              justifyContent={"center"}
            >
              <Paper
                elevation={0}
                sx={{ p: 2, width: { xs: "100%", lg: "50%" } }}
              >
                <Breadcrumbs separator="-">
                  <Typography
                    variant="subtitle2"
                    fontSize={20}
                    fontFamily={roboto_condensed.style.fontFamily}
                    fontWeight={300}
                  >
                    {fiche.numero_RNCP}
                  </Typography>
                  <Badge
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                    color={fiche.statut ? "success" : "error"}
                  >
                    <Typography
                      variant="subtitle2"
                      fontSize={20}
                      fontFamily={roboto_condensed.style.fontFamily}
                      fontWeight={300}
                    >
                      {fiche.statut ? "Fiche Active" : "Fiche Inacive"}
                    </Typography>
                  </Badge>
                </Breadcrumbs>
                <List dense>
                  {fiche.ancienne_certification && (
                    <ListItem disablePadding>
                      <ListItemText
                        primary="Certification antérieure"
                        secondary={
                          <>
                            <Typography component={"span"} fontSize={14}>
                              {fiche.ancienne_certification}
                            </Typography>
                            <IconButton
                              onClick={() =>
                                router.push(
                                  "/fiches/" + fiche.ancienne_certification
                                )
                              }
                            >
                              <LinkIcon fontSize="small" htmlColor="blue" />
                            </IconButton>
                          </>
                        }
                      />
                    </ListItem>
                  )}
                  {fiche.nouvelle_certification && (
                    <ListItem disablePadding>
                      <ListItemText
                        primary="Remplacée par"
                        secondary={
                          <>
                            <Typography component={"span"} fontSize={14}>
                              {fiche.nouvelle_certification}
                            </Typography>
                            <IconButton
                              onClick={() =>
                                router.push(
                                  "/fiches/" + fiche.nouvelle_certification
                                )
                              }
                            >
                              <LinkIcon fontSize="small" htmlColor="blue" />
                            </IconButton>
                          </>
                        }
                      />
                    </ListItem>
                  )}
                </List>
              </Paper>
              {(fiche.date_dernier_jo ||
                fiche.date_decision ||
                fiche.date_effet ||
                fiche.date_publication ||
                fiche.duree_enregistrement ||
                fiche.date_fin_enregistrement ||
                fiche.date_limite_delivrance) && (
                <Paper
                  elevation={0}
                  sx={{ p: 2, width: { xs: "100%", lg: "50%" } }}
                >
                  <List dense disablePadding>
                    {fiche.date_dernier_jo && (
                      <ListItem disablePadding>
                        <ListItemText
                          primary="Date du JO/BO"
                          secondary={transformDate(fiche.date_dernier_jo)}
                        />
                      </ListItem>
                    )}
                    {fiche.date_dernier_jo && (
                      <ListItem disablePadding>
                        <ListItemText
                          primary="Date de décision"
                          secondary={transformDate(fiche.date_decision)}
                        />
                      </ListItem>
                    )}
                    {fiche.date_effet && (
                      <ListItem disablePadding>
                        <ListItemText
                          primary="Date d’effet"
                          secondary={transformDate(fiche.date_effet)}
                        />
                      </ListItem>
                    )}
                    {fiche.date_publication && (
                      <ListItem disablePadding>
                        <ListItemText
                          primary="Date de publication"
                          secondary={transformDate(fiche.date_publication)}
                        />
                      </ListItem>
                    )}
                    {fiche.duree_enregistrement && (
                      <ListItem disablePadding>
                        <ListItemText
                          primary="Durée d’enregistrement (années)"
                          secondary={fiche.duree_enregistrement}
                        />
                      </ListItem>
                    )}
                    {fiche.date_fin_enregistrement && (
                      <ListItem disablePadding>
                        <ListItemText
                          primary="Date de fin d’enregistrement"
                          secondary={transformDate(
                            fiche.date_fin_enregistrement
                          )}
                        />
                      </ListItem>
                    )}
                    {fiche.date_limite_delivrance && (
                      <ListItem disablePadding>
                        <ListItemText
                          primary="Date limite de délivrance"
                          secondary={transformDate(
                            fiche.date_limite_delivrance
                          )}
                        />
                      </ListItem>
                    )}
                  </List>
                </Paper>
              )}
            </Stack>
          </Paper>
          <Box width={{ xs: 0, md: "50%" }} height={400} position={"relative"}>
            <Image src={detailInfo} fill style={{ objectFit: "contain" }} />
          </Box>
        </Stack>
      </Paper>
      <Paper
        sx={{
          position: "relative",
          bottom: 20,
          width: "100%",
          bgcolor: "transparent",
          minHeight: 500,
        }}
        elevation={0}
      >
        <Container
          disableGutters
          sx={{ display: "flex", flexDirection: "column", gap: 5 }}
        >
          <Stack
            gap={5}
            flexDirection={{ xs: "column", md: "row" }}
            width={"100%"}
          >
            <Paper
              elevation={0}
              sx={{ p: 2, width: { xs: "100%", md: "50%" }, borderRadius: 2 }}
            >
              <Typography
                variant="h6"
                fontFamily={roboto_condensed.style.fontFamily}
                textTransform={"uppercase"}
                color={"#052b4cd6"}
                gutterBottom
              >
                Infos de référence
              </Typography>
              <Divider
                variant="middle"
                orientation="horizontal"
                sx={{ mb: 1 }}
              />
              <Box width={"100%"} maxHeight={350}>
                {fiche.fiches_codes_nsf &&
                  fiche.fiches_codes_nsf.map((code_nsf, key) => (
                    <Typography
                      key={key}
                      variant="subtitle2"
                      gutterBottom
                      color={"#3e5d76d9"}
                    >
                      {code_nsf.code_NSF.code_nsf}, {code_nsf.code_NSF.libelle}
                    </Typography>
                  ))}
                {fiche.fiches_formacodes &&
                  fiche.fiches_formacodes.map((formacode, key) => (
                    <Typography
                      key={key}
                      variant="subtitle2"
                      gutterBottom
                      color={"#3e5d76d9"}
                    >
                      {formacode.formacodes.formacode},{" "}
                      {formacode.formacodes.libelle}
                    </Typography>
                  ))}
                <List dense>
                  {fiche.nomenclature_europe_intitule && (
                    <ListItem disablePadding>
                      <ListItemText
                        primary={"Nomenclature du niveau de qualification"}
                        secondary={fiche.nomenclature_europe_intitule}
                        primaryTypographyProps={{
                          fontSize: 17,
                        }}
                        secondaryTypographyProps={{
                          fontSize: 16,
                        }}
                      />
                    </ListItem>
                  )}
                  <ListItem disablePadding>
                    <ListItemText
                      primary={"Inscrite au cadre de Nouvelle Calédonie"}
                      secondary={
                        fiche.accessible_nouvelle_caledonie ? "Oui" : "Non"
                      }
                      primaryTypographyProps={{
                        fontSize: 17,
                      }}
                      secondaryTypographyProps={{
                        fontSize: 16,
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary={"Inscrite au cadre de la Polynésie Française"}
                      secondary={
                        fiche.accessible_polynesie_francaise ? "Oui" : "Non"
                      }
                      primaryTypographyProps={{
                        fontSize: 17,
                      }}
                      secondaryTypographyProps={{
                        fontSize: 16,
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Paper>
            <Certificateurs certificateurs={fiche.fiches_certificateurs} />
          </Stack>
          <CertificateDescription descriptions={fiche.fiches_descriptions} />
          <BlocCompetence code_blocs={fiche.blocs_competences} />
        </Container>
      </Paper>
    </>
  );
}

FicheDetails.getInitialProps = async (context) => {
  const { rncp } = context.query;
  try {
    const { data } = await axios.get(
      "http://localhost:8000/api/v1/fiches/" + rncp,
      {
        headers: {
          "X-API-KEY": "ME",
        },
      }
    );
    return {
      fiche: data,
    };
  } catch (e) {
    if (isAxiosError(e)) {
      console.log(e.cause);
      return {
        fiche: null,
      };
    }
  }
};

FicheDetails.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
