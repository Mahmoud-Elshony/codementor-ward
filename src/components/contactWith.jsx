import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import DeveloperList from "./developerList";

export default function ContactWithComponent() {
  return (
    <>
      <Box
        component={Container}
        style={{
          background:
            "linear-gradient(45deg, rgb(0, 62, 83) 30%, rgb(0 97 129) 50%)",
          maxWidth: "100%",
        }}
      >
        <Container style={{ paddingTop: 84 }}>
          <Typography
            color="white"
            variant="h3"
            fontWeight={"bold"}
            textAlign={"center"}
            paddingBottom={"50px"}
          >
            contact with
            <br />
            12000+ top developers anytime
          </Typography>
       
            <DeveloperList></DeveloperList>
         
          <Typography
            color="white"
            variant="h5"
            fontWeight={"bold"}
            textAlign={"center"}
            paddingBottom={"50px"}
          >
            Start working with our developers
            <br />
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgb(255, 94, 69)", px: 5, py: 1, mt: 2 }}
            >
              Get Started
            </Button>{" "}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
