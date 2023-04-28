import React, { useState } from "react";
import {
  Alert,
  Button,
  Divider,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InputAdornment from "@mui/material/InputAdornment";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";
import Link from "@/components/Link";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { PersonOutline } from "@mui/icons-material";
import axios, { isAxiosError } from "axios";
import { useAuthToken, useProfile } from "@/components/utils";

const loginSchema = yup
  .object({
    email: yup.string().email(),
    fullname: yup.string(),
  })
  .required();

export default function BasicDetailForm({ setEdit }) {
  const {
    data: session,
    status,
    update,
  } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/login?callbackUrl=" + window.location.pathname);
    },
  });
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const handleOpen = (message) => {
    setErrorMessage(message);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: session && session.user.email,
      fullname: session && session.user.fullname,
    },
  });

  const onSubmit = async (update_data) => {
    setLoading(true);
    const { data, error } = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}auth/users/me`,
      update_data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.user.access_token}`,
        },
      }
    );
    update(data);
    setLoading(false);
    setEdit();

    if (error) {
      setLoading(false);
      if (isAxiosError(error) && error.status === 401) {
        router.push("/login?callbackUrl=" + window.location.pathname);
      }
    }
  };

  return (
    <>
      <form method="POST" action="#" onSubmit={handleSubmit(onSubmit)}>
        <Stack flexDirection={"column"} gap={2}>
          <TextField
            {...register("email")}
            variant="outlined"
            type={"email"}
            label="Email"
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email?.message : null}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            fullWidth
            // placeholder={user.email}
          />
          <TextField
            {...register("fullname")}
            variant="outlined"
            type={"text"}
            label="Full name"
            error={errors.fullname ? true : false}
            helperText={errors.fullname ? errors.fullname?.message : null}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline fontSize="small" />
                </InputAdornment>
              ),
            }}
            fullWidth
            // placeholder={user.fullname}
          />
          <LoadingButton
            sx={{ ml: "auto" }}
            loadingPosition="start"
            loading={loading}
            startIcon={<LoginIcon />}
            variant="contained"
            type="submit"
          >
            save
          </LoadingButton>
        </Stack>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          variant="filled"
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
    // </Paper>
  );
}
