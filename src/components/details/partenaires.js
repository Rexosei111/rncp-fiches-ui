import { transformDate } from "@/components/utils";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Poppins } from "next/font/google";
import React from "react";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});

export default function Partenaires({ partenaires = [] }) {
  return (
    <Box
      width={"100%"}
      maxHeight={300}
      sx={{
        overflowY: "auto",
      }}
      mt={1}
      fontFamily={popins.style.fontFamily}
    >
      {partenaires.length === 0 && (
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography variant="subtitle2" fontWeight={700}>
            Data not available
          </Typography>
        </Stack>
      )}
      {partenaires.length > 0 && (
        <Stack flexDirection={"column"} gap={{ xs: 2, md: 1 }}>
          {partenaires?.map((fiche_partenaire, index) => (
            <Box key={index}>
              <List elevation={0} disablePadding dense>
                <ListItem disableGutters disablePadding>
                  <ListItemText>
                    <Stack
                      flexDirection={{ xs: "column", md: "row" }}
                      gap={{ xs: 0, md: 2 }}
                      alignItems="flex-start"
                    >
                      <Typography
                        variant="caption"
                        fontSize={15}
                        fontWeight={400}
                        color={"#5A606F"}
                        flexBasis={"auto"}
                        whiteSpace={{ xs: "normal", md: "nowrap" }}
                      >
                        Nom :
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        flexBasis={"100%"}
                        color={"black"}
                        fontWeight={400}
                      >
                        {fiche_partenaire.organisme.nom_organisme}
                      </Typography>
                    </Stack>
                  </ListItemText>
                </ListItem>
                {!fiche_partenaire.organisme.siret_organisme?.startsWith(
                  "Inconnu"
                ) && (
                  <ListItem disableGutters disablePadding>
                    <ListItemText>
                      <Stack
                        flexDirection={{ xs: "column", md: "row" }}
                        gap={{ xs: 0, md: 2 }}
                        alignItems="flex-start"
                      >
                        <Typography
                          variant="caption"
                          fontSize={15}
                          fontWeight={400}
                          color={"#5A606F"}
                          flexBasis={"auto"}
                          whiteSpace={{ xs: "normal", md: "nowrap" }}
                        >
                          Siret :
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          flexBasis={"100%"}
                          color={"black"}
                          fontWeight={400}
                        >
                          {fiche_partenaire.organisme.siret_organisme}
                        </Typography>
                      </Stack>
                    </ListItemText>
                  </ListItem>
                )}

                <ListItem disablePadding>
                  <ListItemText>
                    <Stack
                      flexDirection={"row"}
                      flexWrap={{ xs: "wrap", md: "nowrap" }}
                      alignItems={"space-between"}
                      gap={{ xs: 0, md: 2 }}
                    >
                      <Typography
                        variant="caption"
                        fontSize={15}
                        fontWeight={400}
                        color={"#5A606F"}
                        flexBasis={"auto"}
                        whiteSpace={"nowrap"}
                      >
                        Certification Qualiopi :
                      </Typography>
                      <Stack
                        flexDirection={"row"}
                        alignItems={"center"}
                        flexBasis={"100%"}
                        gap={1}
                        flexGrow={1}
                      >
                        <Typography
                          variant="subtitle2"
                          color={
                            fiche_partenaire.organisme.is_qualiopi_certified ===
                            true
                              ? "#00C408"
                              : "#F0000E"
                          }
                          fontWeight={400}
                        >
                          {fiche_partenaire.organisme.is_qualiopi_certified ===
                          true
                            ? "Oui"
                            : "Non"}
                        </Typography>
                        {fiche_partenaire.organisme.is_qualiopi_certified ===
                        true ? (
                          <CheckCircleOutlineRoundedIcon
                            htmlColor="#00C408"
                            fontSize="small"
                          />
                        ) : (
                          <HighlightOffRoundedIcon
                            htmlColor="#F0000E"
                            fontSize="small"
                          />
                        )}
                      </Stack>
                    </Stack>
                  </ListItemText>
                </ListItem>
                {fiche_partenaire.organisme.is_qualiopi_certified &&
                  fiche_partenaire.organisme.informations_qualiopi && (
                    <ListItem disableGutters disablePadding>
                      <ListItemText>
                        <Stack
                          flexDirection={{ xs: "column", md: "row" }}
                          gap={{ xs: 0, md: 2 }}
                          alignItems="flex-start"
                        >
                          <Typography
                            variant="caption"
                            fontSize={15}
                            fontWeight={400}
                            color={"#5A606F"}
                            flexBasis={"auto"}
                            whiteSpace={{ xs: "normal", md: "nowrap" }}
                          >
                            Numéro Qualiopi :
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            flexBasis={"100%"}
                            color={"black"}
                            fontWeight={400}
                          >
                            {
                              fiche_partenaire.organisme.informations_qualiopi
                                .numero_da_qualiopi
                            }
                          </Typography>
                        </Stack>
                      </ListItemText>
                    </ListItem>
                  )}
                <ListItem disableGutters disablePadding>
                  <ListItemText>
                    <Stack
                      flexDirection={{ xs: "column", md: "row" }}
                      gap={{ xs: 0, md: 2 }}
                      alignItems="flex-start"
                    >
                      <Typography
                        variant="caption"
                        fontSize={15}
                        fontWeight={400}
                        color={"#5A606F"}
                        flexBasis={"auto"}
                        whiteSpace={{ xs: "normal", md: "nowrap" }}
                      >
                        Habilitation partenaire :
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        flexBasis={"100%"}
                        color={"black"}
                        fontWeight={400}
                      >
                        {fiche_partenaire.habilitation_partenaire}
                      </Typography>
                    </Stack>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters disablePadding>
                  <ListItemText>
                    <Stack
                      flexDirection={{ xs: "column", md: "row" }}
                      gap={{ xs: 0, md: 2 }}
                      alignItems="flex-start"
                    >
                      <Typography
                        variant="caption"
                        fontSize={15}
                        fontWeight={400}
                        color={"#5A606F"}
                        flexBasis={"auto"}
                        whiteSpace={{ xs: "normal", md: "nowrap" }}
                      >
                        Etat de l’habilitation :
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        flexBasis={"100%"}
                        color={"black"}
                        fontWeight={400}
                      >
                        {fiche_partenaire.etat_habilitation}
                      </Typography>
                    </Stack>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters disablePadding>
                  <ListItemText>
                    <Stack
                      flexDirection={{ xs: "column", md: "row" }}
                      gap={{ xs: 0, md: 2 }}
                      alignItems="flex-start"
                    >
                      <Typography
                        variant="caption"
                        fontSize={15}
                        fontWeight={400}
                        flexBasis={"auto"}
                        whiteSpace={{ xs: "normal", md: "nowrap" }}
                        color={"#5A606F"}
                      >
                        Date de dernière modification de l’habilitation :
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        flexBasis={"100%"}
                        color={"black"}
                        fontWeight={400}
                      >
                        {transformDate(
                          fiche_partenaire.date_derniere_modification_etat
                        )}
                      </Typography>
                    </Stack>
                  </ListItemText>
                </ListItem>
              </List>
              {index + 1 !== partenaires?.length && (
                <Divider flexItem variant="fullWidth" />
              )}
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
}
