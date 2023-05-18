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

export default function Certificateurs({ certificateurs = [] }) {
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
      {certificateurs.length === 0 && (
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography variant="subtitle2" fontWeight={700}>
            Data not available
          </Typography>
        </Stack>
      )}
      {certificateurs.length > 0 && (
        <Stack flexDirection={"column"} gap={{ xs: 2, md: 1 }}>
          {certificateurs?.map((fiche_certificateur) => (
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
                        {fiche_certificateur.organisme.nom_organisme}
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
                        {fiche_certificateur.organisme.siret_organisme}
                      </Typography>
                    </Stack>
                  </ListItemText>
                </ListItem>
              </List>
              <Divider flexItem variant="fullWidth" />
            </>
          ))}
        </Stack>
      )}
    </Box>
  );
}
