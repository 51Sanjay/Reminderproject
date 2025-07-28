import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';

export default function CalendarView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/customers/calendar')
      .then(res => setEvents(res.data))
      .catch(() => alert('Failed to load calendar events'));
  }, []);

  return (
    <Card elevation={3} sx={{ borderRadius: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          📅 Customer Reminder Calendar
        </Typography>
        <Box mt={2}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            editable={false}
            events={events}
            initialView="dayGridMonth"
            height="80vh"
          />
        </Box>
      </CardContent>
    </Card>
  );
}
