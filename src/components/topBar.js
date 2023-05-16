import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "../Link";
import { Avatar, Menu, Stack } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SettingsIcon from "@mui/icons-material/Settings";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import { Person } from "@mui/icons-material";
import { useAuthToken, useProfile } from "../utils";
import Logo from "./logo";

const drawerWidth = 240;
const navItems = [
  { name: "API", url: "/documentation" },
  { name: "Export", url: "#" },
  { name: "Nous contacter", url: "#" },
  { name: "Rechercher", url: "#" },
];

function DrawerAppBar(props) {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      return;
    },
  });
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    removeToken();
    removeProfile();
    router.reload();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Logo />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  component: Link,
                  href: item.url,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {!session ? (
        <>
          <Button
            sx={{ mx: 2 }}
            component={Link}
            variant="outlined"
            href="/login"
          >
            Login
          </Button>
          <Button variant="contained" component={Link} href="/register">
            Register
          </Button>
        </>
      ) : (
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Button startIcon={<Person />} component={Link} href="/profile">
            Profile
          </Button>
          <Button
            variant="contained"
            startIcon={<LogoutIcon />}
            sx={{ mt: 2 }}
            onClick={() => signOut()}
          >
            Logout
          </Button>
        </Stack>
      )}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        color="transparent"
        position="sticky"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Box sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                href={item.url}
                disableRipple
                disableFocusRipple
                disableTouchRipple
                sx={{
                  color: "black",
                  textTransform: "capitalize",
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Stack
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            {!session ? (
              <>
                <Button
                  sx={{ mx: 2, textTransform: "capitalize" }}
                  component={Link}
                  variant="outlined"
                  href="/login"
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  href="/register"
                  disableElevation
                  sx={{ color: "white", textTransform: "capitalize" }}
                >
                  Register
                </Button>
              </>
            ) : (
              <Tooltip
                disableFocusListener
                disableTouchListener
                title="Settings"
              >
                <IconButton
                  onClick={handleClick}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar>
                    {session && session.user?.email[0].toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        </Toolbar>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              p: 2,
              minWidth: 270,
              overflow: "visible",
              borderRadius: 2,
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              // "& .MuiAvatar-root": {
              //   width: 32,
              //   height: 32,
              //   ml: -0.5,
              //   mr: 1,
              // },
              // "&:before": {
              //   content: '""',
              //   display: "block",
              //   position: "absolute",
              //   top: 0,
              //   right: 14,
              //   width: 10,
              //   height: 10,
              //   bgcolor: "background.paper",
              //   transform: "translateY(-50%) rotate(45deg)",
              //   zIndex: 0,
              // },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Stack
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
          >
            <IconButton
              sx={{ bgcolor: "#00000009" }}
              component={Link}
              href="/profile"
            >
              <Avatar sx={{ height: 70, width: 70 }}>
                {session && session.user?.email[0].toUpperCase()}
              </Avatar>
            </IconButton>
            <Typography variant="subtitle2" mt={1}>
              {session && session.user?.email}
            </Typography>
            <Typography variant="caption">
              {session && session.user?.fullname}
            </Typography>
          </Stack>
          <Button
            fullWidth
            startIcon={<Person />}
            component={Link}
            href="/profile"
          >
            Profile
          </Button>
          <Button
            fullWidth
            variant="contained"
            startIcon={<LogoutIcon />}
            sx={{ mt: 2 }}
            onClick={() => signOut()}
          >
            Logout
          </Button>
        </Menu>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
