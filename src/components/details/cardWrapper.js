import { Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { Inter, Poppins } from "next/font/google";

const popinsStyle = Inter(Poppins);

export default function CardWrapper({ children, title }) {
  return (
    <Paper elevation={24} sx={{ p: 3, width: "50%" }}>
      <Typography variant="h4" fontSize={22} fontWeight={500} gutterBottom>
        {title}
      </Typography>
      <Divider variant="middle" />
    </Paper>
  );
}
