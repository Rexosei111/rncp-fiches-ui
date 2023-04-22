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
import { signIn } from "next-auth/react";
const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function Form() {
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
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      ...data,
      callbackUrl: "/",
    });
    setLoading(false);
    if (!result.ok) {
      console.log(result.error);
      handleOpen("Invalid Credentials");
    } else {
      router.push(
        router.query?.callbackUrl ? router.query.callbackUrl : "/profile"
      );
    }
  };

  return (
    <Paper elevation={0} sx={{ width: { xs: "100%", md: 400 }, p: 4 }}>
      <Typography variant="h3" textAlign={"center"}>
        Welcome back
      </Typography>
      <Typography variant="subtitle1" my={2} textAlign="center">
        Please log in with your credentials
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
            focused
            fullWidth
          />
          <LoadingButton
            loadingPosition="start"
            loading={loading}
            startIcon={<LoginIcon />}
            variant="contained"
            type="submit"
          >
            Login
          </LoadingButton>
          <Link href="#" style={{ marginLeft: "auto", fontSize: 15 }}>
            forgot your password?
          </Link>
          <Divider>or</Divider>
          <Button component={Link} href="register">
            Create an account
          </Button>
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
    </Paper>
  );
}
