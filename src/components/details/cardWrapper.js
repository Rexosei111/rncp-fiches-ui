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
export default function CardWrapper({
  children,
  title,
  width = { xs: "100%", md: "50%" },
  id,
}) {
  return (
    <Paper
      elevation={24}
      sx={{
        p: 3,
        width: width,
        borderRadius: 2,
      }}
      id={id}
    >
      <Box>
        <Typography
          variant="h4"
          fontSize={22}
          fontWeight={700}
          fontFamily={popins.style.fontFamily}
          gutterBottom
          sx={{
            textShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
          }}
        >
          {title}
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{ height: 4, bgcolor: "#FF8300", width: "20%" }}
        />
      </Box>
      {children}
    </Paper>
  );
}
