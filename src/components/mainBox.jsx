import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FeatuersBox from "./featuresBox";
import WorldSection from "./worldSectionComponent";
import ContactWithComponent from "./contactWith";
import FooteComponent from "./footer";

function MainBox() {
  return (
    <>
      <Box sx={{ position: "relative", top: "-220px" }}>
        <Box
          container
          sx={{
            backgroundImage: {
              xs: "url(/src/assets/img/hero-m.png)",
              sm: "url(/src/assets/img/hero-l.png)"
            },
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "relative",
            width: {sm:"600px",xs:"300px"},
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
        {/* <FooteComponent></FooteComponent> */}
      </Box>
    </>
  );
}

export default MainBox;
