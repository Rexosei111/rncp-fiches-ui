import { transformDate } from "@/components/utils";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Poppins } from "next/font/google";
import React from "react";

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
          {partenaires?.map((fiche_partenaire) => (
            <>
              <List elevation={0} disablePadding dense>
                <ListItem disableGutters disablePadding>
                  <ListItemText>
                    <Stack
                      flexDirection={{ xs: "column", md: "row" }}
                      gap={{ xs: 1, md: 2 }}
                      alignItems={{ xs: "flex-start", md: "flex-start" }}
                    >
                      <Typography
                        variant="caption"
                        fontSize={15}
                        fontWeight={400}
                        color={"#5A606F"}
                      >
                        Nom :
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        flexGrow={1}
                        color={"black"}
                        fontWeight={400}
                      >
                        {fiche_partenaire.organisme.nom_organisme}
                      </Typography>
                    </Stack>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters disablePadding>
                  <ListItemText>
                    <Stack
                      flexDirection={{ xs: "column", md: "row" }}
                      gap={{ xs: 1, md: 2 }}
                      alignItems={{ xs: "flex-start", md: "flex-start" }}
                    >
                      <Typography
                        variant="caption"
                        fontSize={15}
                        fontWeight={400}
                        color={"#5A606F"}
                      >
                        Siret :
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        flexGrow={1}
                        color={"black"}
                        fontWeight={400}
                      >
                        {fiche_partenaire.organisme.siret_organisme}
                      </Typography>
                    </Stack>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters disablePadding>
                  <ListItemText>
                    <Stack
                      flexDirection={{ xs: "column", md: "row" }}
                      gap={{ xs: 1, md: 2 }}
                      alignItems={{ xs: "flex-start", md: "flex-start" }}
                    >
                      <Typography
                        variant="caption"
                        fontSize={15}
                        fontWeight={400}
                        color={"#5A606F"}
                      >
                        Habilitation partenaire :
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        flexGrow={1}
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
                      gap={{ xs: 1, md: 2 }}
                      alignItems={{ xs: "flex-start", md: "flex-start" }}
                    >
                      <Typography
                        variant="caption"
                        fontSize={15}
                        fontWeight={400}
                        color={"#5A606F"}
                      >
                        Etat de l’habilitation :
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        flexGrow={1}
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
                      gap={{ xs: 1, md: 2 }}
                      alignItems={{ xs: "flex-start", md: "flex-start" }}
                    >
                      <Typography
                        variant="caption"
                        fontSize={15}
                        fontWeight={400}
                        color={"#5A606F"}
                      >
                        Date de dernière modification de l’habilitation :
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        flexGrow={1}
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
              {/* <Divider flexItem variant="fullWidth" /> */}
            </>
          ))}
        </Stack>
      )}
    </Box>
  );
}
