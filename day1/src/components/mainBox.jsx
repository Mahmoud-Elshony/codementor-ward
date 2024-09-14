import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FeatuersBox from "./featuresBox";
import WorldSection from "./worldSectionComponent";
import ContactWithComponent from "./contactWith";

function MainBox() {
  return (
    <>
      <Box sx={{ position: "relative", top: "-220px" }}>
        <Box
          container
          sx={{
            backgroundImage: "url(/src/assets/img/hero-l.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "642px",
            height: "330px",
            margin: "auto",
          }}
        ></Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: "48px",
            fontWeight: "bold",
            lineHeight: "1.5",
            textAlign: "center",
            color: "#003648",
          }}
        >
          Get help from vetted software developers
        </Typography>
        <FeatuersBox></FeatuersBox>
        <WorldSection />
        <ContactWithComponent></ContactWithComponent>
        
      </Box>
    </>
  );
}

export default MainBox;
