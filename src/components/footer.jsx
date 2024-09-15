import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Grid2 as Grid,
  GlobalStyles,
  Stack,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  LinkedIn,
  GitHub,
  Home,
  Email,
  Phone,
  Print,
} from "@mui/icons-material";

export default function FooterComponent() {
  return (
    <Box
      sx={{
        color: "white",
        pt: 4,
        margin: "-219px 0px",
        backgroundColor: "black",
      }}
    >
      {/* Footer Content Section */}
      <GlobalStyles styles={{ Grid: { color: "red" } }} />
      {/* <h1>dsfh</h1> */}
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={15}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              PRODUCTS
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Codementor
              <h6>Find a mentor to help you in real time</h6>
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Codementor Events
              <h6>Attend and host virtual events for developers</h6>
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              DevProjects
              <h6>Learn programming by building projects</h6>
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Arc
              <h6>Helping employers find talent for remote jobs</h6>
            </Link>
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography variant="h6" color="" gutterBottom>
              PAGES
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Become a Codementor
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              How It Works
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Find Mentors
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Find Freelancers
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Find a Tutor
            </Link>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h6" gutterBottom color="black">
              PAGES
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Community
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Blog
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Codementor For Students
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Codementor For Teams
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Code Review
            </Link>
          </Grid>
        </Grid>
        <hr style={{ margin: "30px 0 20px 0", borderColor: "#fff5" }} />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #ddd"
        >
          <Typography
            variant="body1"
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            Get connected with us on social networks:
          </Typography>
          <Box>
            <Stack direction={"row"}>
              <Link href="#" color="inherit" style={{margin:"10px 30px"}} underline="none">
                <h6>Cookie Policy</h6>
              </Link>
              <Link href="#" color="inherit" style={{margin:"10px 30px"}} underline="none">
                <h6>Privacy Policy
                </h6>
              </Link>
              <Link href="#" color="inherit" style={{margin:"10px 36px"}} underline="none">
                <h6>Terms of Service</h6>
              </Link>
              <Link href="#" color="inherit" style={{margin:"10px 30px"}} underline="none">
                <h6>Help Center</h6>
              </Link>

              <IconButton sx={{color:"white"}} href="#" >
              <Facebook color="white"  />
            </IconButton>
            <IconButton sx={{color:"white"}}  href="#">
              <Twitter />
            </IconButton>
            <IconButton sx={{color:"white"}} href="#">
              <Google />
            </IconButton>
            </Stack>
          
           
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
