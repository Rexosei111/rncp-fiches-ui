import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { Roboto_Condensed } from "next/font/google";
import React from "react";

const roboto_condensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const names = {
  activites_visees: "Activité visée",
  capacites_attestees: "Capacités attestées",
  objectifs_contexte: "Objectifs et contexte",
  reglementations_activites: "Réglementation de l’activité",
};
export default function CertificateDescription({ descriptions }) {
  return (
    <Paper elevation={0} sx={{ borderRadius: 2, p: 2 }}>
      <Typography
        variant="h6"
        fontFamily={roboto_condensed.style.fontFamily}
        textTransform={"uppercase"}
        color={"#052b4cd6"}
        gutterBottom
      >
        Description de la certification
      </Typography>
      <Divider variant="middle" orientation="horizontal" sx={{ mb: 1 }} />
      <Stack flexDirection={"column"} gap={2}>
        {Object.entries(descriptions)
          .filter(([key, value]) => Object.keys(names).includes(key))
          .map((entry, index) => (
            <Box key={index}>
              <Typography
                variant="subtitle2"
                fontFamily={roboto_condensed.style.fontFamily}
                fontWeight={300}
                color={"#3e5d76d9"}
              >
                {names[entry[0]]}:{" "}
              </Typography>
              <Typography variant="body2">{entry[1]}:</Typography>
            </Box>
          ))}
      </Stack>
    </Paper>
  );
}
