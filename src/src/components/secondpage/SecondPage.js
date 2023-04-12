import { Label } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import FirstCollapse from "./FirstCollapse";
import SecondCollapse from "./SecondCollapse";

const SecondPage = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <>
      <Box>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <Box>
              <Typography
                variant="h5"
                sx={{
                  bgcolor: "#494949",
                  color: "white",
                  textAlign: "center",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                Furlong Painting - Safe Work Method Statement (SWMS)
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "#ffffff",

                padding: "0px 40px 0px 40px",
              }}
            >
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  COVID 19 SAFE WORK PLAN
                </Typography>
                <div>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Task Name:
                    <span style={{ color: "red", fontWeight: "normal" }}>
                      Attending work site
                    </span>
                  </Typography>
                </div>
                <br />
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Would this Hazardous Element exist on this worksite?
                </Typography>
                <br />
                <FormControlLabel
                  control={
                    <Checkbox onClick={() => setShow(!show)} size="small" />
                  }
                  label="Attracting COVID-19 from clients, other workers or surfaces"
                />

                {show && <FirstCollapse />}
                <br />
                <FormControlLabel
                  control={
                    <Checkbox onClick={() => setShow2(!show2)} size="small" />
                  }
                  label="Alcohol based sanitiser"
                />
                {show2 && <SecondCollapse />}
              </Box>
            </Box>
            <Box sx={{ display: "flex", textAlign: "right" }}>
              <Button
                sx={{ bgcolor: "#494949", color: "white", textAlign: "left" }}
              >
                BACK
              </Button>
              <Button
                sx={{
                  bgcolor: "#494949",
                  color: "white",
                }}
              >
                NEXT
              </Button>
            </Box>
          </Container>
        </React.Fragment>
      </Box>
    </>
  );
};

export default SecondPage;
