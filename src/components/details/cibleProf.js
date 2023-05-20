import { splitString } from "@/components/utils";
import { Box, Stack, Typography } from "@mui/material";
import { Poppins } from "next/font/google";
import React from "react";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});
const names = {
  secteurs_activite: "Secteurs d'activité",
  type_emploi_accessibles: "Types d'emplois accessibles",
};

export default function CibleProf({ description = {}, codes_rome = [] }) {
  return (
    <Stack
      flexDirection={"column"}
      mt={1}
      gap={2}
      fontFamily={popins.style.fontFamily}
    >
      {Object.entries(description)
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
      {codes_rome.length > 0 && (
        <Box>
          <Typography
            variant="subtitle2"
            fontFamily={popins.style.fontFamily}
            fontWeight={700}
            fontSize={15}
            fontStyle={"italic"}
            color={"#C7C6C6"}
          >
            Code(s) ROME :
          </Typography>
          <ul style={{ paddingLeft: 15 }}>
            {codes_rome.map((rome, index) => (
              <Typography
                component={"li"}
                key={index}
                variant="body2"
                fontWeight={400}
                color={"#000000"}
                lineHeight={2}
              >
                {rome.codes_rome.code_rome} {`(${rome.codes_rome.libelle})`}
              </Typography>
            ))}
          </ul>
        </Box>
      )}
    </Stack>
  );
}
