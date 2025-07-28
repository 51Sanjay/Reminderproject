import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Dashboard,
  EditNotifications,
  ListAlt,
  Group,
  Summarize,
  Task,
  CalendarMonth,
  Settings,
  Login,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { icon: <Dashboard />, label: "Dashboard", path: "/dashboard" },
  { icon: <EditNotifications />, label: "Reminder", path: "/reminder" },
  { icon: <ListAlt />, label: "Customer", path: "/customer" },
  { icon: <Group />, label: "Group", path: "/group" },
  { icon: <Summarize />, label: "Reports", path: "/reminderReport" },
  { icon: <Task />, label: "Task", path: "/task" },
  { icon: <CalendarMonth />, label: "Calendar", path: "/calendar" },
  { icon: <Settings />, label: "Settings", path: "/settings" },
 
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: isMobile ? 70 : 240,
        height: "100vh",
        position: "fixed",
        top: { xs: 88, sm: 65 },
        left: 0,
        bgcolor: "rgba(106,17,203,0.4)",
        background: "linear-gradient(to bottom, rgba(106,17,203,0.4), rgba(37,117,252,0.4))",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        zIndex: 1300,
        overflowY: "auto",
        px: 1,
        pt: 2,
        boxShadow: 4,
        transition: "width 0.3s ease",
      }}
    >
      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Tooltip title={isMobile ? item.label : ""} placement="right" key={item.label}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  mb: 1,
                  px: isMobile ? 1 : 2.5,
                  borderRadius: "999px",
                  backgroundColor: isActive ? "rgba(255,255,255,0.15)" : "transparent",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.25)",
                    transform: "scale(1.04)",
                  },
                  transition: "all 0.3s",
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "white",
                    minWidth: 0,
                    mr: isMobile ? 0 : 2,
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                {!isMobile && (
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  />
                )}
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
