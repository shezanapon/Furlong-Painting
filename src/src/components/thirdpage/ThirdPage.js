import {
  Box,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
} from "@mui/material";
import Collapse from "./Collapse";
import React, { useState } from "react";

const ThirdPage = () => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={"md"}>
        <Box
          sx={{
            minHeight: "80vh",
            marginTop: "30px",
            marginBottom: "30px",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          }}
        >
          <Box sx={{ bgcolor: "#494949", color: "white" }}>
            <Typography
              variant="h5"
              sx={{
                bgcolor: "#494949",
                color: "white",
                textAlign: "center",
                paddingBottom: "10px",
                paddingTop: "10px",
                marginTop: "25px",
                marginBottom: "25px",
              }}
            >
              Furlong Painting - Safe Work Method Statement (SWMS)
            </Typography>
          </Box>
          <Box sx={{ padding: "0px 30px 0px 30px" }}>
            <Box sx={{ bgcolor: "#ffffff" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Task Name:
                <span style={{ fontWeight: "normal" }}> Planning</span>
              </Typography>
              <br />
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Hazardous Elements
              </Typography>
              <br />
              <FormControlLabel
                control={
                  <Checkbox onClick={() => setShow(!show)} size="small" />
                }
                label="Hazardous Materials"
              />
              {show && <Collapse />}
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ThirdPage;
