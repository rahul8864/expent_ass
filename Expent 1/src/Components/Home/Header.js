import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

// Icons
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { NavLink, Outlet } from "react-router-dom";

const pages = [
  <NavLink
    to="/home"
    style={({ isActive }) => ({
      color: isActive ? "white" : "#7e9eaa",
      textDecoration: "none",
    })}
  >
    Home
  </NavLink>,
  <NavLink
    to="/dashboard"
    style={({ isActive }) => ({
      color: isActive ? "white" : "#7e9eaa",
      textDecoration: "none",
    })}
  >
    Dashboard
  </NavLink>,
  <NavLink
    to="/vendors"
    style={({ isActive }) => ({
      color: isActive ? "white" : "#7e9eaa",
      textDecoration: "none",
    })}
  >
    Vendors
  </NavLink>,
  <NavLink
    to="/"
    style={({ isActive }) => ({
      color: isActive ? "white" : "#7e9eaa",
      textDecoration: "none",
    })}
  >
    Projects
  </NavLink>,
   <NavLink
   to="/flow"
   style={({ isActive }) => ({
     color: isActive ? "white" : "#7e9eaa",
     textDecoration: "none",
   })}
 >
   React Flow
 </NavLink>,
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="absolute"
        style={{
          backgroundColor: "#003b4c",
          color: "white",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Expent
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    style={{ color: "#587e89" }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Expent
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  style={{ color: "#7e9eaa" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Stack spacing={2} direction="row">
              <IconButton sx={{ p: 0 }} style={{ marginRight: "10px" }}>
                <Avatar style={{ backgroundColor: "#265867" }}>
                  <PermIdentityIcon style={{ color: "white" }} />
                </Avatar>
              </IconButton>
              <IconButton sx={{ p: 0 }} style={{ marginRight: "10px" }}>
                <Avatar style={{ backgroundColor: "#265867" }}>
                  <NotificationsNoneIcon style={{ color: "white" }} />
                </Avatar>
              </IconButton>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar style={{ backgroundColor: "white" }}>
                    <PermIdentityIcon style={{ color: "#89dedd" }} />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <>
        <Outlet />
      </>
    </>
  );
};
export default Header;
