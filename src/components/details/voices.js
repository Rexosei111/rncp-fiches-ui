import { splitString } from "@/components/utils";
import { Box, Stack, Typography } from "@mui/material";
import { Poppins } from "next/font/google";
import React from "react";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});
const names = {
  prerequis_entree_formation: "Prérequis à l'entrée en formation",
  prerequis_validation_certification:
    "Prérequis à la validation de la certification",
};

export default function Voices({ fiche = {} }) {
  return (
    <Stack
      flexDirection={"column"}
      mt={1}
      gap={2}
      fontFamily={popins.style.fontFamily}
    >
      {Object.entries(fiche)
        .filter(
          ([key, value]) => Object.keys(names).includes(key) && value !== null
        )
        .map((entry, index) => (
          <Box key={index}>
            <Typography
              variant="subtitle2"
              fontFamily={popins.style.fontFamily}
              fontWeight={700}
              gutterBottom
              fontSize={15}
              fontStyle={"italic"}
              color={"#C7C6C6"}
            >
              {names[entry[0]]}
            </Typography>
            {splitString(entry[1]).map((item, index) => (
              <Typography
                key={index}
                variant="body2"
                fontWeight={400}
                color={"#000000"}
                lineHeight={2}
              >
                {item}
              </Typography>
            ))}
          </Box>
        ))}
    </Stack>
  );
}
