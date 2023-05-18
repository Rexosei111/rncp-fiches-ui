import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Poppins } from "next/font/google";
import Link from "next/link";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const indexes = [
  { name: "Informations de référence", id: "#reference" },
  { name: "Description de la certification", id: "#certDescription" },
  { name: "Certificateur", id: "#certificateur" },
  { name: "Statistiques", id: "#statistiques" },
  { name: "Blocs de compétences", id: "#blocCompetence" },
  { name: "Partenaire", id: "#partenaires" },
  { name: "Voies d'accès", id: "#" },
  { name: "Admission", id: "#" },
  { name: "Cible professionnelle", id: "#" },
];
export default function Indexes() {
  return (
    <List disablePadding sx={{ maxHeight: 300, mt: 1 }}>
      {indexes.map((item, index) => (
        <ListItem key={index} disableGutters disablePadding>
          <ListItemIcon>
            <CircleIcon
              fontSize="small"
              htmlColor="#FF8300"
              sx={{ fontSize: 9 }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="caption"
              fontSize={15}
              fontFamily={popins.style.fontFamily}
              component={Link}
              href={item.id}
              color={"black"}
              sx={{ textDecoration: "none" }}
            >
              {item.name}
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
