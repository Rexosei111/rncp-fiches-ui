import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { Poppins } from "next/font/google";
import React from "react";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});

const names = {
  liste_competences: "Liste Compétence",
  modalites_evaluation: "Modalités évaluation",
};
export default function BlocCompetence({ code_blocs = [] }) {
  return (
    <>
      {code_blocs && code_blocs.length === 0 && (
        <Stack alignItems={"center"} justifyContent={"center"} width={"100%"}>
          <Typography variant="subtitle2" my={2} fontWeight={700}>
            Data not available
          </Typography>
        </Stack>
      )}
      <Stack
        flexDirection={"column"}
        mt={1}
        gap={2}
        width={"100%"}
        fontFamily={popins.style.fontFamily}
      >
        {code_blocs.map((code_bloc, index) => (
          <Box key={index}>
            <Typography
              variant="subtitle2"
              gutterBottom
              fontSize={15}
              fontWeight={700}
              color={"#000000"}
              textAlign={"center"}
            >
              {code_bloc.code_bloc} - {code_bloc.libelle}
            </Typography>
            <Stack flexDirection={{ xs: "column" }} gap={{ xs: 1, md: 2 }}>
              {Object.entries(code_bloc)
                .filter(
                  ([key, value]) =>
                    Object.keys(names).includes(key) && value !== null
                )
                .map((entry, index) => (
                  <Box key={index}>
                    <Typography
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
          </Box>
        ))}
      </Stack>
    </>
  );
}
