import {
  ContentCopyOutlined,
  CopyAllOutlined,
  KeyOffOutlined,
  KeyOutlined,
  MailOutline,
} from "@mui/icons-material";
import {
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function APIKeyDetails() {
  const [hide, setHide] = useState(true);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    navigator.clipboard.writeText(session && session.user.key);
    setOpen(true);
  };
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("login?callbackUrl=" + window.location.pathname);
    },
  });

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <Paper variant="outlined" sx={{ my: 2, p: 2 }}>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Typography variant="h5">API Key</Typography>
          <Typography variant="subtitle2" color={"GrayText"} pt={1}>
            Store this key securely
          </Typography>
        </Box>
      </Stack>
      <Divider variant="fullWidth" sx={{ my: 2 }} />
      <List dense>
        <ListItem disablePadding>
          <ListItemIcon>
            <IconButton onClick={toggleHide}>
              {hide && <KeyOffOutlined />}
              {!hide && <KeyOutlined />}
            </IconButton>
          </ListItemIcon>
          <ListItemText>
            <Typography variant="body1">Key</Typography>
            <Stack flexDirection={"row"} flexWrap={"nowrap"}>
              <TextField
                variant="standard"
                value={session && session.user.key}
                size="small"
                sx={{
                  border: "none",
                  outline: "none",
                }}
                disabled
                fullWidth
                type={hide ? "password" : "text"}
              />
              <IconButton onClick={handleTooltipOpen}>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                  <Tooltip
                    title={"Copied"}
                    disableHoverListener
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableTouchListener
                  >
                    <ContentCopyOutlined fontSize="small" />
                  </Tooltip>
                </ClickAwayListener>
              </IconButton>
            </Stack>
          </ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}
