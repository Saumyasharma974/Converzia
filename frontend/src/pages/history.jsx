import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Grid
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch (err) {
        // You can show a snackbar here if needed
      }
    };
    fetchHistory();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      {/* Home Button */}
      <Box sx={{ mb: 2 }}>
        <IconButton onClick={() => routeTo('/home')}>
          <HomeIcon />
        </IconButton>
      </Box>

      {/* History Cards */}
      {meetings.length !== 0 ? (
        <Grid container spacing={2}>
          {meetings.map((e, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Code: {e.meetingCode}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Date: {formatDate(e.date)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" color="text.secondary">
          No meeting history available.
        </Typography>
      )}
    </Box>
  );
}
