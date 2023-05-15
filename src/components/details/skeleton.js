import { Container, Paper, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function DetailSkeleton() {
  return (
    <Container maxWidth={"lg"} sx={{ minHeight: "79vh" }}>
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={350}>
        <Stack
          component={Paper}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={5}
          p={2}
          elevation={0}
          sx={{ minHeight: 300, width: "100%", borderRadius: 3 }}
        >
          <Stack width={"100%"}>
            <Skeleton variant="text" width={"100%"} />
            <Skeleton variant="rectangular" height={100} width={"50%"} />
            <Skeleton variant="rectangular" height={100} width={"50%"} />
          </Stack>
          <Stack width={"100%"}>
            <Skeleton variant="text" width={"70%"} />
            <Skeleton variant="text" height={10} width={"100%"} />
            <Skeleton variant="text" height={10} width={"100%"} />
            <Skeleton variant="text" height={50} width={"70%"} />
            <Skeleton variant="text" height={10} width={"100%"} />
            <Skeleton variant="text" height={10} width={"20%"} />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
