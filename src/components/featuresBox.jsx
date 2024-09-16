import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import imgMentor from "../assets/img/mentorship.jpg";
import freelanserImg from "../assets/img/freelance-job.png";
import { styled } from "@mui/material/styles";
import {
  Button,
  List,
  ListItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
const ListItemIcon = styled(MuiListItemIcon)({
  // minWidth: '40px',
  marginLeft: "-20px",
  // '& svg': {
  //   width: '24px',
  //   height: '24px',
  //   fill: 'rgb(0, 127, 158)',
  // },
});
export default function FeatuersBox() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "90%",
        margin: "0px auto 0px auto",
        maxWidth: "1060px",
        position: "relative",
        // top: "100px",
      }}
    >
      <Grid
        container
        spacing={2}
        direction={{ xs: "column-reverse", sm: "row" }}
      >
        <Grid
          paddingY={5}
          paddingX={{ xs: 1, lg: 0 }}
          size={{ xs: 12, sm: 6 }}
          order={{ xs: 1, md: 2 }}
        >
          <Box container sx={{ maxWidth: "440px" }}>
            <Typography
              variant="h3"
              fontWeight={"bold"}
              fontSize={{ xs: "25px", md: "35px" }}
            >
              One-on-one live mentorship
            </Typography>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                color: "#666",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItem>
                <ListItemIcon>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Zeplin-guideline" fill="none" fill-rule="evenodd">
                      <g id="DebugSvg_IconDebug">
                        <path id="DebugSvg_Rectangle" d="M0 0h24v24H0z"></path>
                        <path
                          d="M20.122 7.544l.7 1.212-1.959 1.132a7.958 7.958 0 0 1 1.135 3.912H22.2v1.4h-2.29a7.948 7.948 0 0 1-1.047 2.913l1.96 1.13-.7 1.213-2.088-1.204A7.981 7.981 0 0 1 12 22c-2.089 0-3.99-.8-5.416-2.112l.992-.99a6.575 6.575 0 0 0 3.724 1.665l-.001-5.389 1.4-1.4.002 6.79a6.6 6.6 0 0 0 5.65-8.363l-4.078-.001 1.4-1.4h2.101a6.619 6.619 0 0 0-.876-1.224l.991-.99c.05.053.098.107.145.162l2.088-1.204zm.152-4.735l.99.99L3.5 21.49l-.99-.989L20.274 2.81zM16.7 2.3v1.4A2.3 2.3 0 0 0 14.4 6v.366c.19.06.376.126.56.2l-1.1 1.1A6.598 6.598 0 0 0 6.226 10.8l4.499-.001-1.4 1.4H5.648A6.605 6.605 0 0 0 5.4 14c0 .646.093 1.27.266 1.86l-1.1 1.1a7.944 7.944 0 0 1-.476-1.76H1.8v-1.4h2.203l.002-.08a7.957 7.957 0 0 1 1.132-3.833l-1.96-1.13.7-1.213 2.088 1.205a8.013 8.013 0 0 1 3.334-2.282L9.3 6a2.3 2.3 0 0 0-2.143-2.295L7 3.7V2.3a3.7 3.7 0 0 1 3.695 3.503L10.7 6v.105a8.056 8.056 0 0 1 2.3-.043V6a3.7 3.7 0 0 1 3.7-3.7z"
                          id="Combined-Shape"
                          fill="rgb(0, 127, 158)"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  sx={{ marginLeft: "-10px" }}
                  primary="Debug with the help of an expert"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill-rule="nonzero" fill="none">
                      <path d="M0 0h24v24H0z"></path>
                      <path
                        fill="rgb(0, 127, 158)"
                        d="M18.99 2h-8.11a3 3 0 0 0-2.95 3v1a3.59 3.59 0 0 1 .6-.06h.16-.16a3.6 3.6 0 0 0 0 7.2 3.56 3.56 0 0 0 1.6-.39l.2-.1a2.63 2.63 0 0 0 .36-.08h-.19a3.59 3.59 0 0 0-1.18-6.52V5c0-.856.694-1.55 1.55-1.55h8.11c.856 0 1.55.694 1.55 1.55v6.11a1.55 1.55 0 0 1-1.55 1.55h-2.86c0-.13.09-.25.11-.39l.07-.34.8-3.77A1.75 1.75 0 0 0 15.74 6a2 2 0 0 0-.4 0 1.79 1.79 0 0 0-1.75 1.45l-.5 2.35-.08.37a4.83 4.83 0 0 1-2.12 3.21 4.24 4.24 0 0 1-2.25.66 4 4 0 0 1-2.2-.66 9.25 9.25 0 0 0-4 4.63c-.67 1.93-.8 4 1.25 4h9.87a1.12 1.12 0 0 0 1.13-1.14 8 8 0 0 0-.3-2.45 20.66 20.66 0 0 0-.91-2.11A7.55 7.55 0 0 0 15.53 14h3.45a3 3 0 0 0 2.95-2.95V5a3 3 0 0 0-2.94-3zm-8.25 7.55a2.2 2.2 0 1 1-.64-1.552 2.2 2.2 0 0 1 .64 1.562v-.01zm4.12 2.4a5.55 5.55 0 0 1-2.2 3.13l-1.06.68.56 1.13c.316.627.597 1.271.84 1.93a6.26 6.26 0 0 1 .23 1.74H3.65a2.07 2.07 0 0 1-.24 0 3.6 3.6 0 0 1 .31-2.11A7.5 7.5 0 0 1 6.5 15a5.3 5.3 0 0 0 2.13.45 5.67 5.67 0 0 0 3-.87 6.2 6.2 0 0 0 2.75-4.11l.08-.37.5-2.35a.4.4 0 0 1 .38-.34h.09a.36.36 0 0 1 .31.45l-.8 3.77-.08.32z"
                      ></path>
                    </g>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  sx={{ marginLeft: "-10px" }}
                  primary="Personalize your learning experience"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M1 0h24v24H1z"></path>
                      <path
                        fill="rgb(0, 127, 158)"
                        fill-rule="nonzero"
                        d="M15.9 2c.738 0 1.477.34 1.98.865L18 3l3.3 3.7c.367.458.65 1.085.617 1.725L21.9 8.6v10.6c0 .8-.3 1.5-.8 2-.455.455-1.157.744-1.807.793L19.1 22H6.8c-.7 0-1.5-.3-2-.8a2.765 2.765 0 0 1-.793-1.784L4 19.2V4.8c0-.8.4-1.5.9-2 .455-.455 1.157-.744 1.807-.793L6.9 2h9zm-.7 1.4H6.9c-.4 0-.7.1-1 .4-.171.257-.343.514-.388.834L5.5 4.8v14.4c0 .4.1.7.4 1 .262.262.525.372.854.395l.146.005h12.3l.139-.006a1.357 1.357 0 0 0 1.255-1.255l.006-.139V8.7h-4c-.753 0-1.329-.531-1.394-1.261L15.2 7.3V3.4zm.64 8.539a.95.95 0 0 1 .432.431l.575 1.166 1.286.187a.95.95 0 0 1 .527 1.62l-.931.907.22 1.281a.95.95 0 0 1-1.379 1.002l-1.15-.605-1.15.605a.95.95 0 0 1-1.379-1.002l.22-1.28-.93-.908a.95.95 0 0 1 .526-1.62l1.286-.187.575-1.166a.95.95 0 0 1 1.272-.431zm-.42 1.417l-.63 1.277-1.41.204 1.02.994-.24 1.404 1.26-.663 1.26.663-.24-1.404 1.02-.994-1.41-.204-.63-1.277zM11 11.9v1.2H7v-1.2h4zm2-3v1.2H7V8.9h6zm3.5-5.3v2.9c0 .367.252.65.602.694l.098.006h2.6l-2.9-3.3c-.1-.1-.3-.2-.4-.3zM13 5.9v1.2H7V5.9h6z"
                      ></path>
                    </g>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  sx={{ marginLeft: "-10px" }}
                  primary="Get answers to complex problems"
                />
              </ListItem>
            </List>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(255, 94, 69)",
                px: 5,
                py: 2,
                fontWeight: "bold",
              }}
            >
              find a mentor
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} order={{ xs: 2, md: 1 }}>
          {" "}
          <img
            src={imgMentor}
            alt="Live programming help so you can learn to code"
            loading="lazy"
            width={"100%"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          paddingY={5}
          paddingX={{ xs: 1, lg: 0 }}
          size={{ xs: 12, sm: 6 }}
          order={{ xs: 2, md: 1 }}
        >
          <Box container sx={{ maxWidth: "440px" }}>
            <Typography variant="h3" fontWeight={"bolder"} fontSize={{ xs: "25px", md: "35px" }}>
              Project-based freelance work
            </Typography>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                color: "#666",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItem>
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <path
                        fill="rgb(0, 127, 158)"
                        fill-rule="nonzero"
                        d="M20.612 19.844l2.28 2.125-.86.922-2.335-2.176a4.684 4.684 0 0 1-2.726.863c-1.643 0-3.088-.83-3.886-2.078H4.991C3.89 19.5 3 18.712 3 17.74V3.76C3 2.788 3.891 2 4.99 2h13.936c1.1 0 1.991.788 1.991 1.76v11.365c.38.63.596 1.359.596 2.138 0 .97-.336 1.862-.901 2.58zm-.956-6.061V3.76c0-.239-.294-.499-.73-.499H4.991c-.435 0-.73.26-.73.5V17.74c0 .239.295.499.73.499h7.554a4.127 4.127 0 0 1-.117-.976c0-2.392 2.042-4.315 4.543-4.315 1.003 0 1.932.31 2.685.835zm-9.095-5.965a.4.4 0 0 1-.123.288l-2.191 2.168 2.191 2.168a.4.4 0 0 1 0 .575l-.298.295a.406.406 0 0 1-.582 0l-2.78-2.75a.399.399 0 0 1 0-.576l2.78-2.75a.406.406 0 0 1 .582 0l.298.295a.4.4 0 0 1 .123.287zm3.63-.582l2.78 2.75a.4.4 0 0 1 0 .576l-2.78 2.75a.405.405 0 0 1-.583 0l-.298-.295a.399.399 0 0 1 0-.575l2.191-2.168-2.191-2.168a.398.398 0 0 1 0-.575l.298-.296a.407.407 0 0 1 .582 0zm2.78 13.08c1.82 0 3.28-1.375 3.28-3.053s-1.46-3.054-3.28-3.054c-1.82 0-3.282 1.376-3.282 3.054s1.461 3.054 3.282 3.054z"
                      ></path>
                    </g>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  sx={{ marginLeft: "-10px" }}
                  primary="Find experts for on-demand code review"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <path
                        fill="rgb(0,127,158)"
                        fill-rule="nonzero"
                        d="M13.497 10.933c2.486 0 4.502-2 4.502-4.466C18 4 15.983 2 13.497 2 11.01 2 8.994 4 8.994 6.467c0 2.466 2.016 4.466 4.503 4.466zm0-7.543c1.713 0 3.101 1.377 3.101 3.077 0 1.699-1.388 3.076-3.101 3.076s-3.102-1.377-3.102-3.076c.016-1.688 1.4-3.048 3.102-3.048v-.03zm7.944 13.528c.85 2.442 1.02 5.022-1.61 5.082H7.192c-1.62 0-2.181-1.002-2.181-2.333l-2.441-1.36a1.11 1.11 0 0 1-.57-.992v-4.804a1.11 1.11 0 0 1 .57-.992l4.382-2.442a1.129 1.129 0 0 1 1.09 0l4.383 2.442c.14.082.26.194.35.327a5.146 5.146 0 0 0 3.462-.794 11.792 11.792 0 0 1 5.203 5.866zM3.431 12.66v4.486l4.102 2.283 4.103-2.283V12.66l-4.103-2.283-4.102 2.283zm17.07 7.742h-.04c.17-.258.27-1.171-.35-3.057a9.944 9.944 0 0 0-3.913-4.715 6.517 6.517 0 0 1-2.781.626h-.42v4.06c.008.409-.21.79-.57.992L8.283 20.58H19.88c.18 0 .51-.03.62-.179zM8.484 17.067l-1.01-.536-1.001.536a.503.503 0 0 1-.24.06.532.532 0 0 1-.402-.195.523.523 0 0 1-.109-.43l.25-1.172-.8-.804a.533.533 0 0 1 .28-.903l1.1-.169.491-.992a.51.51 0 0 1 .92 0l.49.992 1.102.169a.533.533 0 1 1 .28.903l-.8.804.2 1.171a.532.532 0 0 1-.51.625.503.503 0 0 1-.241-.059z"
                      ></path>
                    </g>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  sx={{ marginLeft: "-10px" }}
                  primary="Build features for your existing product"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <path
                        fill="rgb(0,127,158)"
                        fill-rule="nonzero"
                        d="M18.844 2h-.312a14.884 14.884 0 0 0-10.71 5.725l-3.84 1.75a2.326 2.326 0 0 0-1.368 1.993 2.323 2.323 0 0 0 1.145 2.127l.58.343-1.248 1.417a2.316 2.316 0 0 0-.467 2.215l-.479 1.285a2.326 2.326 0 0 0 .283 2.154 2.353 2.353 0 0 0 1.944.99c.317 0 .632-.063.924-.187l1.046-.443a2.325 2.325 0 0 0 2.483-.399l1.58-1.417.156.31a2.317 2.317 0 0 0 2.082 1.273h.078a2.315 2.315 0 0 0 2.037-1.417l1.86-4.264a17.128 17.128 0 0 0 5.332-9.79 3.1 3.1 0 0 0-.686-2.559A3.135 3.135 0 0 0 18.844 2zM4.628 10.86l1.614-.732a18.851 18.851 0 0 0-1.113 2.448l-.58-.343a.774.774 0 0 1 .079-1.374zm-.846 9.335a.761.761 0 0 1-.19-.83l.134-.344 1.202 1.196-.3.122a.771.771 0 0 1-.858-.122l.012-.022zm2.894-.432l-2.371-2.359a.773.773 0 0 1 0-1.107l.568-.643 3.55 3.533-.634.565a.78.78 0 0 1-1.124.044l.011-.033zm6.68-.665a.78.78 0 0 1-1.414 0l-.29-.487c.842-.38 1.657-.816 2.438-1.307l-.734 1.794zM20.403 5.4a15.481 15.481 0 0 1-4.988 9.058h-.055l-.056.133A18.406 18.406 0 0 1 9.27 17.98l-3.173-3.156c.624-2.47 3.34-10.321 12.602-11.218h.145c.469 0 .913.207 1.213.565.29.34.416.789.346 1.229zm-5.444 1.03a2.776 2.776 0 0 1 2.772 2.768c0 1.121-.68 2.131-1.72 2.56a2.794 2.794 0 0 1-3.035-.606 2.758 2.758 0 0 1-.596-3.02 2.783 2.783 0 0 1 2.579-1.702zm0 4.208c.799 0 1.447-.645 1.447-1.44 0-.795-.648-1.44-1.447-1.44-.8 0-1.447.645-1.447 1.44 0 .795.647 1.44 1.447 1.44z"
                      ></path>
                    </g>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  sx={{ marginLeft: "-10px" }}
                  primary="Turn your idea into an MVP"
                />
              </ListItem>
            </List>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(255, 94, 69)",
                px: 5,
                py: 2,
                fontWeight: "bold",
              }}
            >
              find a freelancer
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} order={{ xs: 1, md: 2 }}>
          {" "}
          <img
            src={freelanserImg}
            alt="Live programming help so you can learn to code"
            loading="lazy"
            width={"100%"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
