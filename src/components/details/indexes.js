import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Inter, Poppins } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const indexes = [
  "Informations de référence",
  "Description de la certification",
  "Certificateur",
  "Statistiques",
  "Blocs de compétences",
  "Partenaire",
  "Voies d'accès",
  "Admission",
  "Cible professionnelle",
];
export default function Indexes() {
  return (
    <Stack
      maxHeight={300}
      overflow={"auto"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      mt={1}
      gap={2}
    >
      <List disablePadding>
        {indexes.slice(0, 5).map((item, index) => (
          <ListItem key={index} disableGutters disablePadding>
            <ListItemIcon>
              <CircleIcon
                fontSize="small"
                htmlColor="#FF8300"
                sx={{ fontSize: 9 }}
              />
            </ListItemIcon>
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                fontFamily: popins.style.fontFamily,
              }}
            />
          </ListItem>
        ))}
      </List>
      <List disablePadding>
        {indexes.slice(5).map((item, index) => (
          <ListItem key={index} disableGutters disablePadding>
            <ListItemIcon>
              <CircleIcon
                fontSize="small"
                htmlColor="#FF8300"
                sx={{ fontSize: 9 }}
              />
            </ListItemIcon>
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                fontFamily: popins.style.fontFamily,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
