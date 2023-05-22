import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Poppins } from "next/font/google";
import { Stack, Typography } from "@mui/material";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 12,
    fontFamily: popins.style.fontFamily,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    fontFamily: popins.style.fontFamily,
    fontWeight: 700,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#FF830061",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function StatistiqueTable({ statistiques = [] }) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      variant="outlined"
      sx={{ mt: 1, fontFamily: popins.style.fontFamily, fontWeight: 700 }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              Année d'obtention de la certification
            </StyledTableCell>
            <StyledTableCell align="center">
              Nombre de certifiés
            </StyledTableCell>
            <StyledTableCell align="center">
              Nombre de certifiés à la suite d’un parcours vae
            </StyledTableCell>
            <StyledTableCell align="center">
              Taux d'insertion global à 6 mois (en %)
            </StyledTableCell>
            <StyledTableCell align="center">
              Taux d'insertion dans le métier visé à 6 mois (en %)
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistiques.length > 0 &&
            statistiques
              .sort((a, b) => {
                const lastTwoA = parseInt(a.annee, 10);
                const lastTwoB = parseInt(b.annee, 10);
                return lastTwoA - lastTwoB;
              })
              .map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.annee}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.nombre_certifies}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.nombre_certifies_vae}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.taux_insertion_global_6}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.taux_insertion_metier_24}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          {statistiques.length === 0 && (
            <StyledTableRow>
              <StyledTableCell colSpan={5} align="center">
                Data not available
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
