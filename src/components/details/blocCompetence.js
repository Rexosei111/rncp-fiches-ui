import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { Roboto_Condensed } from "next/font/google";
import React from "react";

const roboto_condensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const names = {
  liste_competences: "Liste Compétence",
  modalites_evaluation: "Modalités évaluation",
};
export default function BlocCompetence({ code_blocs }) {
  return (
    <Paper elevation={0} sx={{ borderRadius: 2, p: 2 }}>
      <Typography
        variant="h6"
        fontFamily={roboto_condensed.style.fontFamily}
        textTransform={"uppercase"}
        color={"#052b4cd6"}
        gutterBottom
      >
        Blocs de compétences
      </Typography>
      <Divider variant="middle" orientation="horizontal" sx={{ mb: 1 }} />
      {code_blocs.length === 0 && (
        <Stack alignItems={"center"} justifyContent={"center"} width={"100%"}>
          <Typography
            variant="subtitle2"
            color={"#3e5d76d9"}
            my={2}
            fontWeight={300}
          >
            Data not available
          </Typography>
        </Stack>
      )}
      <Stack flexDirection={"column"} gap={2}>
        {code_blocs.map((code_bloc, index) => (
          <Box key={index}>
            <Typography
              variant="subtitle2"
              gutterBottom
              fontSize={18}
              color={"#3e5d76d9"}
            >
              {code_bloc.code_bloc}, {code_bloc.libelle}
            </Typography>
            <Stack flexDirection={"column"} gap={2}>
              {Object.entries(code_bloc)
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
                    <Typography variant="body2">{entry[1]}</Typography>
                  </Box>
                ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
