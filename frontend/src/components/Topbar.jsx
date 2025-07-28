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
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored user data if needed
    localStorage.clear();

    // Navigate to login page
    navigate("/");
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
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          px: 2,
          py: { xs: 1, sm: 1 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: 18, sm: 22 },
            color: "white",
            textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
          }}
        >
          🔔 Vyoobam Reminder
        </Typography>

        {/* Logout Icon on right */}
        <Box sx={{ mt: { xs: 1, sm: 0 } }}>
          <Tooltip title="Logout">
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon sx={{ color: "#fff" }} />
              LogOut
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
