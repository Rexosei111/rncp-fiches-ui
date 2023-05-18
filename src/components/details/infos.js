import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Poppins } from "next/font/google";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});

export default function Infos({ fiche }) {
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
      <List dense>
        {fiche && fiche.fiches_codes_nsf && (
          <ListItem disablePadding disableGutters>
            <ListItemText>
              <Stack
                flexDirection={"row"}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                alignItems={"flex-start"}
              >
                <Typography
                  variant="caption"
                  fontSize={15}
                  fontWeight={400}
                  color={"#5A606F"}
                  flexBasis={"auto"}
                  whiteSpace={"nowrap"}
                >
                  Codes NSF :
                </Typography>
                <Box
                  sx={{
                    p: 0,
                    ml: { xs: 0, md: 2 },
                    flexBasis: "100%",
                    listStyle: "none",
                  }}
                  component={"ol"}
                >
                  {fiche.fiches_codes_nsf.map((code_nsf, key) => (
                    <Typography
                      component={"li"}
                      key={key}
                      variant="subtitle2"
                      color={"black"}
                      fontWeight={400}
                    >
                      {code_nsf.code_NSF.code_nsf}{" "}
                      {`(${code_nsf.code_NSF.libelle})`}
                    </Typography>
                  ))}
                </Box>
              </Stack>
            </ListItemText>
          </ListItem>
        )}
        {fiche && fiche.fiches_formacodes && (
          <ListItem disablePadding disableGutters>
            <ListItemText>
              <Stack
                flexDirection={"row"}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                alignItems={"space-between"}
              >
                <Typography
                  variant="caption"
                  fontSize={15}
                  fontWeight={400}
                  color={"#5A606F"}
                  flexBasis={"auto"}
                  whiteSpace={"nowrap"}
                >
                  Formacode :
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    p: 0,
                    ml: { xs: 0, md: 2 },
                    flexBasis: "100%",
                    listStyle: "none",
                  }}
                  component={"ol"}
                >
                  {fiche.fiches_formacodes.map((codes, key) => (
                    <Typography
                      component={"li"}
                      key={key}
                      variant="subtitle2"
                      color={"black"}
                      fontWeight={400}
                    >
                      {codes.formacodes.formacode}{" "}
                      {`(${codes.formacodes.libelle})`}
                    </Typography>
                  ))}
                </Box>
              </Stack>
            </ListItemText>
          </ListItem>
        )}
        {fiche && fiche.nomenclature_europe_intitule && (
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
                  Niveau de qualification :
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"black"}
                  fontWeight={400}
                  flexBasis={"100%"}
                >
                  {fiche.nomenclature_europe_intitule}
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
                Inscrite au cadre de Nouvelle Calédonie :
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
                    fiche.nomenclature_europe_intitule === true
                      ? "#00C408"
                      : "#F0000E"
                  }
                  fontWeight={400}
                >
                  {fiche.nomenclature_europe_intitule === true ? "Oui" : "Non"}
                </Typography>
                {fiche.nomenclature_europe_intitule === true ? (
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
                Inscrite au cadre de la Polynésie Française :
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
                    fiche.accessible_polynesie_francaise === true
                      ? "#00C408"
                      : "#F0000E"
                  }
                  fontWeight={400}
                >
                  {fiche.accessible_polynesie_francaise === true
                    ? "Oui"
                    : "Non"}
                </Typography>
                {fiche.accessible_polynesie_francaise === true ? (
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
      </List>
    </Box>
  );
}
