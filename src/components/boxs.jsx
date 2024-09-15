import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import "./jumbotron.css"
export default function BoxSx() {
  return (
    <>
      <Box
        sx={{
          // width: "100vw",
          // height: "450px",
          borderRadius: 1,
          background:
            "linear-gradient(45deg, rgb(0, 62, 83) 30%, rgb(0 97 129) 50%)",
          // display: "flex",
          paddingTop: "105px",
          paddingBottom: "235px",
          paddingLeft: "10px",
          textAlign: "center",
          "&:after":{display: {
            xs: "none",
            md: "inline",
          }}

        }}
        className="jumbotron__center"
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          Find a developer for
        </Typography>
        <Typography variant="h4" sx={{ color: "white" }}>
          live mentorship & freelance projects
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "rgb(255, 94, 69)", px: 5, py: 1, mt: 2 }}
        >
          Get help now
        </Button>
      </Box>
    </>
  );
}
