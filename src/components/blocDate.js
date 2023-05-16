import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { transformDate } from "../utils";
import { removeNullValues } from "../utils";
import { Typography } from "@mui/material";

export default function BlocDate({ data }) {
  const transformedData = removeNullValues(data);

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ maxWidth: { xs: "100%", md: "80%" } }}
    >
      <Table aria-label="simple table" size="small">
        <TableBody>
          {transformedData?.date_dernier_jo && (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ border: "none" }}
                align="left"
              >
                <Typography variant="caption" fontSize={15} color={"#5A606F"}>
                  Date du JO/BO:
                </Typography>
              </TableCell>
              <TableCell align="left" sx={{ border: "none" }}>
                {transformDate(transformedData?.date_dernier_jo)}
              </TableCell>
            </TableRow>
          )}
          {transformedData?.date_decision && (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                align="left"
                sx={{ border: "none" }}
              >
                <Typography variant="caption" fontSize={15} color={"#5A606F"}>
                  Date de décision
                </Typography>
              </TableCell>
              <TableCell align="left" sx={{ border: "none" }}>
                {transformDate(transformedData?.date_decision)}
              </TableCell>
            </TableRow>
          )}
          {transformedData?.date_effet && (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                align="left"
                sx={{ border: "none" }}
              >
                <Typography variant="caption" fontSize={15} color={"#5A606F"}>
                  Date d’effet:
                </Typography>
              </TableCell>
              <TableCell align="left" sx={{ border: "none" }}>
                {transformDate(transformedData?.date_effet)}
              </TableCell>
            </TableRow>
          )}
          {transformedData?.date_publication && (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                align="left"
                sx={{ border: "none" }}
              >
                <Typography variant="caption" fontSize={15} color={"#5A606F"}>
                  Date de publication:
                </Typography>
              </TableCell>
              <TableCell align="left" sx={{ border: "none" }}>
                {transformDate(transformedData?.date_publication)}
              </TableCell>
            </TableRow>
          )}
          {transformedData?.duree_enregistrement && (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                align="left"
                sx={{ border: "none" }}
              >
                <Typography variant="caption" fontSize={15} color={"#5A606F"}>
                  Durée d’enregistrement (années):
                </Typography>
              </TableCell>
              <TableCell align="left" sx={{ border: "none", color: "#5A606F" }}>
                {transformedData?.duree_enregistrement}
              </TableCell>
            </TableRow>
          )}
          {transformedData?.date_fin_enregistrement && (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                align="left"
                sx={{ border: "none" }}
              >
                <Typography variant="caption" fontSize={15} color={"#5A606F"}>
                  Date de fin d’enregistrement:
                </Typography>
              </TableCell>
              <TableCell align="left" sx={{ border: "none" }}>
                {transformDate(transformedData?.date_fin_enregistrement)}
              </TableCell>
            </TableRow>
          )}
          {transformedData?.date_limite_delivrance && (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                align="left"
                sx={{ border: "none" }}
              >
                <Typography variant="caption" fontSize={15} color={"#5A606F"}>
                  Date limite de délivrance:
                </Typography>
              </TableCell>
              <TableCell align="left" sx={{ border: "none" }}>
                {transformDate(transformedData?.date_limite_delivrance)}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
