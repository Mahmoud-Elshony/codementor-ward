import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid2 as Grid } from '@mui/material';
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub, Home, Email, Phone, Print } from '@mui/icons-material';

export default function FooterComponent() {
  return (
    <Box sx={{color: 'white', pt: 4 , margin:"-219px 0px",backgroundColor:"black"}}>
 

      {/* Footer Content Section */}
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3} lg={4}>
            <Typography variant="h6" gutterBottom>
              <Home sx={{ mr: 1, verticalAlign: 'middle' }} /> Company Name
            </Typography>
            <Typography variant="body2">
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Angular
            </Link><br />
            <Link href="#" color="inherit" underline="none">
              React
            </Link><br />
            <Link href="#" color="inherit" underline="none">
              Vue
            </Link><br />
            <Link href="#" color="inherit" underline="none">
              Laravel
            </Link>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Pricing
            </Link><br />
            <Link href="#" color="inherit" underline="none">
              Settings
            </Link><br />
            <Link href="#" color="inherit" underline="none">
              Orders
            </Link><br />
            <Link href="#" color="inherit" underline="none">
              Help
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              <Home sx={{ mr: 1, verticalAlign: 'middle' }} /> New York, NY 10012, US
            </Typography>
            <Typography variant="body2">
              <Email sx={{ mr: 1, verticalAlign: 'middle' }} /> info@example.com
            </Typography>
            <Typography variant="body2">
              <Phone sx={{ mr: 1, verticalAlign: 'middle' }} /> + 01 234 567 88
            </Typography>
            <Typography variant="body2">
              <Print sx={{ mr: 1, verticalAlign: 'middle' }} /> + 01 234 567 89
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright Section */}
      <Box textAlign="center" py={4} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: 
        <Link href="https://mui.com/" underline="none" sx={{ fontWeight: 'bold', ml: 1 }}>
          MUI.com
        </Link>
      </Box>
      <hr/>
           {/* Social Network Section */}
           <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        borderBottom="1px solid #ddd"
      >
        <Typography variant="body1" sx={{ display: { xs: 'none', lg: 'block' } }}>
          Get connected with us on social networks:
        </Typography>
        <Box>
          <IconButton color="secondary" href="#">
            <Facebook />
          </IconButton>
          <IconButton color="secondary" href="#">
            <Twitter />
          </IconButton>
          <IconButton color="secondary" href="#">
            <Google />
          </IconButton>
          <IconButton color="secondary" href="#">
            <Instagram />
          </IconButton>
          <IconButton color="secondary" href="#">
            <LinkedIn />
          </IconButton>
          <IconButton color="secondary" href="#">
            <GitHub />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
