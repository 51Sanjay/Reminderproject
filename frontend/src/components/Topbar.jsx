import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

const Topbar = ({ onMenuClick }) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background:
          "linear-gradient(to right, rgba(106,17,203,0.6), rgba(37,117,252,0.6))",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Menu icon (only on mobile) + Title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ display: { sm: "none" }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: { xs: 18, sm: 22 },
            }}
          >
            🔔 Vyoobam Reminder
          </Typography>
        </Box>

        {/* Right: Logout Icon (always shown) */}
        <Tooltip title="Logout">
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
