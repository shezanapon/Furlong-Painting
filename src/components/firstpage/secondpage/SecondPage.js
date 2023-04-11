import { Label } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import FirstCollapse from "./FirstCollapse";

const SecondPage = () => {
  const [show, setShow] = useState(false);
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
                    <span style={{ color: "red" }}>Attending work site</span>
                  </Typography>
                </div>
                <br />
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Would this Hazardous Element exist on this worksite?
                </Typography>
                <br />
                <Checkbox onClick={() => setShow(!show)} size="small" />

                {show && <FirstCollapse />}
              </Box>
            </Box>
          </Container>
        </React.Fragment>
      </Box>
    </>
  );
};

export default SecondPage;
