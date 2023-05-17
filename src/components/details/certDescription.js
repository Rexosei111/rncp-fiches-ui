import { Box, Stack, Typography } from "@mui/material";
import { Poppins } from "next/font/google";
import React from "react";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});

const names = {
  activites_visees: "Activité visée",
  capacites_attestees: "Capacités attestées",
  objectifs_contexte: "Objectifs et contexte",
  reglementations_activites: "Réglementation de l’activité",
};
export default function CertDescription({ descriptions = {} }) {
  return (
    <Stack
      flexDirection={"column"}
      mt={1}
      gap={2}
      fontFamily={popins.style.fontFamily}
    >
      {Object.entries(descriptions)
        .filter(
          ([key, value]) => Object.keys(names).includes(key) && value !== null
        )
        .map((entry, index) => (
          <Box key={index}>
            <Typography
              variant="subtitle2"
              // fontFamily={popins.style.fontFamily}
              fontWeight={700}
              gutterBottom
              fontSize={15}
              fontStyle={"italic"}
              color={"#C7C6C6"}
            >
              {names[entry[0]]}
            </Typography>
            <Typography
              variant="body2"
              fontWeight={400}
              color={"#000000"}
              lineHeight={2}
            >
              {entry[1]}
            </Typography>
          </Box>
        ))}
    </Stack>
  );
}
