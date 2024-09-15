import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import imgMentor from "../assets/img/mentorship.jpg"
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Tooltip,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
export default function FeatuersBox() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "90%",
        margin: "0px auto 40px auto",
        maxWidth: "1060px",
        position: "relative",
        // top: "100px",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={6} order={1} pt={8}>
          <Box container sx={{ maxWidth: "440px" }}>
            <Typography variant="h3" fontWeight={"bold"}>
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
        <Grid size={6} order={2}>
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
        <Grid size={6} order={2} pt={8}>
          <Box container sx={{ maxWidth: "440px" }}>
            <Typography variant="h3">Project-based freelance work</Typography>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper",
                color:"#666"
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
                  primary="Find experts for on-demand code"
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
        <Grid size={6} order={1} p={0}>
          {" "}
          <img
            src="/src/assets/img/freelance-job.png"
            alt="Live programming help so you can learn to code"
            loading="lazy"
            width={"100%"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
