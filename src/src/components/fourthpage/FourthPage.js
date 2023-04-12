import {
  Box,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FirstCollapse4 from "./FirstCollapse4";
import SecondCollapse4 from "./SecondCollapse4";

const FourthPage = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
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
                <span style={{ fontWeight: "normal" }}>
                  {" "}
                  Transporting Paint & Equipment
                </span>
              </Typography>
              <br />
              <br />
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Hazardous Elements
              </Typography>
              <br />
              <FormControlLabel
                control={
                  <Checkbox onClick={() => setShow(!show)} size="small" />
                }
                label="Environmental - incidient/spills"
              />
              <br />
              {show && <FirstCollapse4 />}

              <FormControlLabel
                control={
                  <Checkbox onClick={() => setShow1(!show1)} size="small" />
                }
                label="Flying Objects"
              />
              <br />

              {show1 && <SecondCollapse4 />}

              <FormControlLabel
                control={
                  <Checkbox onClick={() => setShow2(!show2)} size="small" />
                }
                label="Securing Ladders/planks"
              />

              {show2 && <p>helloooo</p>}
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default FourthPage;
