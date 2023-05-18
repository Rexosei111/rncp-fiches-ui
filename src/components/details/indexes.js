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
import { Link as scrollLink } from "react-scroll";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const indexes = [
  { name: "Informations de référence", id: "reference" },
  { name: "Certificateur", id: "certificateur" },
  { name: "Partenaire", id: "partenaires" },
  { name: "Description de la certification", id: "certDescription" },
  { name: "Blocs de compétences", id: "blocCompetence" },
  { name: "Statistiques", id: "statistiques" },
  { name: "Voies d'accès", id: "" },
  { name: "Admission", id: "" },
  { name: "Cible professionnelle", id: "" },
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
              component={scrollLink}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              color={"black"}
              sx={{ textDecoration: "none", cursor: "pointer" }}
            >
              {item.name}
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
