import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Customer from './pages/CustomerPages';
import ReminderL from './pages/RemaninderL';
import ReminderReport from './components/ReminderReport';
import SettingsPage from './pages/SettingsPage';
import CalendarPage from './pages/CalendarPage';
import Task from  "./Task/TaskManager" 
import Group from './pages/GroupPage';
import { Box } from '@mui/material';

const App = () => {
  const location = useLocation();
  const hideRoutes = ["/"];
  const showTopbar = !hideRoutes.includes(location.pathname);
  const showSidebar = !hideRoutes.includes(location.pathname);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {showTopbar && <Topbar />}

      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {showSidebar && <Sidebar />}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 1, sm: 3 },
            mt: { xs: '88px', sm: '64px' },           // Topbar height varies
            ml: showSidebar ? { xs: '90px', sm: '250px' } : 0, // Sidebar width varies
            width: '100%',
            overflow: 'auto',
          }}
        >
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/reminderReport" element={<ReminderReport />} />
            <Route path="/reminder" element={<ReminderL />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/task" element={<Task />} />
            <Route path="/group" element={<Group />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
