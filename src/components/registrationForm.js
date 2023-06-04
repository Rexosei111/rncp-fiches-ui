import React from "react";
import {
  Alert,
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
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import axios, { isAxiosError } from "axios";
import { useRouter } from "next/router";

const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirm_password: yup.string().required(),
    fullname: yup.string(),
  })
  .required();

export default function RegistrationForm() {
  const [open, setOpen] = React.useState(false);
  const [misMatch, setMisMatch] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

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
    setErrorMessage("");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    setMisMatch(false);
    if (formData.password !== formData.confirm_password) {
      setMisMatch(true);
      return;
    }
    try {
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_API_BASE_URL + "/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      router.push("login");
    } catch (e) {
      setLoading(false);
      if (isAxiosError(e)) {
        if (
          e.response.status === 400 &&
          e.response.data.detail instanceof String
        ) {
          handleOpen(e.response.data.detail);
        } else if (
          e.response.status === 400 &&
          e.response.data.detail instanceof Object
        ) {
          handleOpen(e.response.data.detail.reason);
        } else {
          handleOpen("Unable to register user at this time.");
        }
      }
    }
  };

  return (
    <Paper elevation={0} sx={{ width: { xs: "100%", md: 400 }, p: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }} textAlign={"center"}>
        Create new account
      </Typography>
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
            focused
            placeholder="example@provider.com"
          />
          <TextField
            {...register("password")}
            variant="outlined"
            type={"password"}
            label="Password"
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password?.message : null}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <TextField
            {...register("confirm_password")}
            variant="outlined"
            type={"password"}
            label="confirm_password"
            error={errors.confirm_password ? true : misMatch ? true : false}
            helperText={
              errors.confirm_password
                ? errors.confirm_password?.message
                : misMatch
                ? "Passwords do not match"
                : null
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <TextField
            {...register("fullname")}
            variant="outlined"
            type={"text"}
            label="fullname"
            error={errors.fullname ? true : false}
            helperText={errors.fullname ? errors.fullname?.message : null}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <LoadingButton
            loadingPosition="start"
            loading={loading}
            startIcon={<LoginIcon />}
            variant="contained"
            type="submit"
            sx={{ textTransform: "capitalize", color: "white" }}
          >
            Sign up
          </LoadingButton>
          <Link href="login" style={{ marginLeft: "auto", fontSize: 15 }}>
            Already have an account?
          </Link>
        </Stack>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
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
    </Paper>
  );
}
