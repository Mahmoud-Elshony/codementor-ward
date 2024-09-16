import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid2 as Grid,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
const baseIconUrl =
  "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/";

const developers = [
  {
    name: "Jessamyn Smith",
    description: "Experienced Full-Stack Web Developer",
    image:
      "https://next-cdn.codementor.io/images/landing-page/developers/jessamyn-smith.png",
    icons: [
      `${baseIconUrl}python-plain.svg`,
      `${baseIconUrl}sql-plain.svg`,
      `${baseIconUrl}reactjs-plain.svg`,
    ],
  },
  {
    name: "Daniel Hamilton",
    description: "Senior Software Engineer @ Indeed",
    image:
      "https://next-cdn.codementor.io/images/landing-page/developers/dan-hamilton.png",
    icons: [
      `${baseIconUrl}javascript-plain.svg`,
      `${baseIconUrl}nodejs-plain.svg`,
      `${baseIconUrl}typescript-plain.svg`,
    ],
  },
  {
    name: "Emily Johnson",
    description: "Frontend Developer and UI/UX Designer",
    image:
      "https://next-cdn.codementor.io/images/landing-page/developers/martijn-pieters.png",
    icons: [
      `${baseIconUrl}docker-plain.svg`,
      `${baseIconUrl}nginx-plain.svg`,
      `${baseIconUrl}sass-plain.svg`,
    ],
  },
  {
    name: "Michael Brown",
    description: "DevOps Engineer and Cloud Specialist",
    image:
      "https://next-cdn.codementor.io/images/landing-page/developers/ionica-bizau.png",
    icons: [
      `${baseIconUrl}docker-plain.svg`,
      `${baseIconUrl}linux-plain.svg`,
      `${baseIconUrl}nginx-plain.svg`,
    ],
  },
  {
    name: "Sophia Davis",
    description: "Machine Learning and Data Science Expert",
    image:
      "https://next-cdn.codementor.io/images/landing-page/developers/miroslav-kutak.png",
    icons: [
      `${baseIconUrl}python-plain.svg`,
      `${baseIconUrl}tensorflow-plain.svg`,
      `${baseIconUrl}express-plain.svg`,
    ],
  },
  {
    name: "Chris White",
    description: "Backend Developer  in APIs , Databases",
    image:
      "https://next-cdn.codementor.io/images/landing-page/developers/ben-gottlieb.png",
    icons: [
      `${baseIconUrl}nodejs-plain.svg`,
      `${baseIconUrl}express-plain.svg`,
      `${baseIconUrl}mongodb-plain.svg`,
    ],
  },
];

const DeveloperList = () => {
  return (
    <Grid container spacing={3} direction={{xs:"column",md:"row"}} alignItems={"center"}  >
      {developers.map((developer, index) => (
        <Grid size={{xs:12,sm:9,md:6,lg:4 }}  key={index}>
          <Card sx={{ display: "flex", marginTop:{xs:0,lg:index==1||index==4?"-25px":"0px"}}}>
            <img
              //   height="80"
              width="80px"
              margin="21px 12px"
              height="80px"
              style={{margin: "21px 12px"}}
              src={developer.image}
              alt={`${developer.name}'s profile`}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {developer.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {developer.description}
              </Typography>
              <Box >
                {developer.icons.map((icon, idx) => (
                  <IconButton key={idx}>
                    <img
                      src={icon}
                      alt={`icon-${idx}`}
                      style={{opacity: .5 }}
                    />
                  </IconButton>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DeveloperList;
