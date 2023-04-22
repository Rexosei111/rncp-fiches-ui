import { Close, Edit, EmailOutlined, PersonOutline } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicDetailForm from "./basicDetailForm";
import { useAuthToken, useProfile } from "@/components/utils";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const itemsIcons = {
  Email: <EmailOutlined />,
  "Full name": <PersonOutline />,
};

export default function BasicDetailsList() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("login?callbackUrl=" + window.location.pathname);
    },
  });
  const details = [
    { name: "Email", value: session && session.user.email },
    { name: "Full name", value: session && session.user.fullname },
  ];
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <Paper variant="outlined" sx={{ my: 2, p: 2 }}>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Typography variant="h5">Basic details</Typography>
          <Typography variant="subtitle2" color={"GrayText"} pt={1}>
            Basic information about you
          </Typography>
        </Box>
        <IconButton onClick={handleEdit}>
          {!edit ? <Edit fontSize="small" /> : <Close fontSize="small" />}
        </IconButton>
      </Stack>
      <Divider variant="fullWidth" sx={{ my: 2 }} />
      {edit ? (
        <BasicDetailForm setEdit={setEdit} />
      ) : (
        <List dense>
          {details.map((item, index) => (
            <ListItem disablePadding key={index}>
              <ListItemIcon>{itemsIcons[item.name]}</ListItemIcon>
              <ListItemText primary={item.name} secondary={item.value} />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}
