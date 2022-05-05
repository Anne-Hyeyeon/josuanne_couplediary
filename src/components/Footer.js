import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function Footer() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: 500
    }}
  >
    <CssBaseline />

    <Box
      component="footer"
      sx={{
        py: 20,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
        </Typography>

      </Container>
    </Box>
  </Box>
  )
}

export default Footer