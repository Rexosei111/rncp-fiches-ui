import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { Inter, Poppins } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const indexes = [
  "Informations de référence",
  "Description de la certification",
  "Certificateur",
  "Blocs de compétences",
  "Partenaire",
  "Voies d'accès",
  "Admission",
  "Admission",
  "Cible professionnelle",
];
export default function CardWrapper({ children, title }) {
  return (
    <Paper
      elevation={24}
      sx={{
        p: 3,
        width: "50%",
        borderRadius: 2,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontSize={22}
          fontWeight={700}
          fontFamily={popins.style.fontFamily}
          gutterBottom
        >
          {title}
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{ height: 5, bgcolor: "#FF8300", width: "20%" }}
        />
      </Box>
      {children}
    </Paper>
  );
}
