import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import { Roboto_Condensed } from "next/font/google";
import React from "react";

const roboto_condensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Certificateurs({ certificateurs }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        width: { xs: "100%", md: "50%" },
        borderRadius: 2,
        bgcolor: "#1976d2e0",
      }}
    >
      <Typography
        variant="h6"
        fontFamily={roboto_condensed.style.fontFamily}
        textTransform={"uppercase"}
        gutterBottom
        color={"white"}
      >
        Certificateurs
      </Typography>
      <Divider variant="middle" orientation="horizontal" sx={{ mb: 1 }} />
      <Stack
        flexDirection={"column"}
        gap={2}
        sx={{ maxHeight: 350, overflowY: "auto" }}
      >
        {certificateurs.map((fiche_certificateur) => (
          <List
            component={Paper}
            sx={{ bgcolor: "transparent" }}
            elevation={0}
            disablePadding
            dense
          >
            <>
              <ListItem>
                <ListItemText
                  sx={{ color: "white" }}
                  primary="Nom:"
                  secondary={
                    fiche_certificateur.certificateur.nom_certificateur
                  }
                  secondaryTypographyProps={{
                    color: "white",
                  }}
                ></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Siret : "
                  secondary={
                    fiche_certificateur.certificateur.siret_certificateur
                  }
                  primaryTypographyProps={{
                    color: "white",
                  }}
                  secondaryTypographyProps={{
                    color: "white",
                  }}
                ></ListItemText>
              </ListItem>
            </>
          </List>
        ))}
      </Stack>
    </Paper>
  );
}
