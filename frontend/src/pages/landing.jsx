import React from 'react';
import { Box, Grid, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', px: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" fontWeight={600}>
            Apna Video Call
          </Typography>
          <Box display="flex" gap={2} alignItems="center">
            <Typography
              variant="body1"
              onClick={() => navigate('/aljk23')}
              sx={{ cursor: 'pointer', '&:hover': { color: '#FF9839' } }}
            >
              Join as Guest
            </Typography>
            <Typography
              variant="body1"
              onClick={() => navigate('/auth')}
              sx={{ cursor: 'pointer', '&:hover': { color: '#FF9839' } }}
            >
              Register
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/auth')}
              sx={{
                backgroundColor: '#D97500',
                '&:hover': { backgroundColor: '#ff9800' },
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ px: { xs: 2, sm: 4 }, py: { xs: 4, sm: 8 } }}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.4,
              mb: 2,
            }}
          >
            <span style={{ color: '#FF9839' }}>Connect</span> with your loved Ones
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Cover a distance by Apna Video Call
          </Typography>
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#D97500',
              '&:hover': { backgroundColor: '#ff9800' },
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
            }}
          >
            Get Started
          </Button>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} textAlign="center">
          <Box
            component="img"
            src="/mobile.png"
            alt="video-call"
            sx={{
              maxHeight: { xs: '250px', sm: '350px', md: '450px' },
              width: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
