import React from 'react'
import Layout from "../components/layout"
import { Container, Typography } from '@mui/material'
export default function Contact() {
  return (
    <Container maxWidth={"lg"} sx={{ minHeight: "79vh", py: 2 }}>
        <Typography>Contact</Typography>
    </Container>
  )
}


Contact.getLayout = function (page) {
    return <Layout>{page}</Layout>;
  };