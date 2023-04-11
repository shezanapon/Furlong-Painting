import image from "../firstpage/image/furlong.png";
import pic from "../firstpage/image/pic.png";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { RadioGroup } from "@mui/material";
const FirstPage = () => {
  const { handleSubmit, reset, setValue, control } = useForm({});
  const handleFinalSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box sx={{ bgcolor: "#f5f5f5" }}>
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
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img height="173" src={image} alt=""></img>
              </Box>
              <br />
              <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
                All persons involved in works must have SWMS communicated to
                them before works commence and amend where necessary during
                works. Tool Box meetings identify, control and communicate
                hazards, with work ceasing if incident or near miss occurs.
              </Typography>
            </Box>
            <form onSubmit={handleSubmit((data) => handleFinalSubmit(data))}>
              <section>
                <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                  Principal Contractor
                </Typography>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      sx={{ paddingTop: "10px" }}
                    />
                  )}
                  name="Principal Contractor"
                  control={control}
                />
              </section>
              <section>
                <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                  Client
                </Typography>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      sx={{ paddingTop: "10px" }}
                    />
                  )}
                  name="Client"
                  control={control}
                />
              </section>
              <section>
                <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                  Workplace location
                </Typography>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      multiline
                      rows={5}
                      sx={{ paddingTop: "10px" }}
                    />
                  )}
                  name="Workplace location"
                  control={control}
                />
              </section>
              <section>
                <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                  Work Activity
                </Typography>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      sx={{ paddingTop: "10px" }}
                    />
                  )}
                  name="Work Activity"
                  control={control}
                />
              </section>
              <section>
                <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                  Project Manager
                </Typography>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      sx={{ paddingTop: "10px" }}
                    />
                  )}
                  name="Project Manager"
                  control={control}
                />
              </section>
              <section>
                <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                  Furlong Painting - Project Number*
                </Typography>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      sx={{ paddingTop: "10px" }}
                    />
                  )}
                  name="Project Number"
                  control={control}
                />
              </section>
              <section>
                <Typography
                  sx={{ paddingTop: "20px", fontWeight: "bold" }}
                  variant="subtitle1"
                >
                  Workplace Hazardous Materials Register Sighted
                </Typography>
                <Controller
                  render={({ field }) => (
                    <RadioGroup aria-label="gender" {...field}>
                      <div sx={{ display: "flex" }}>
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="yes"
                        />
                        <FormControlLabel
                          sx={{ paddingLeft: "200px" }}
                          value="no"
                          control={<Radio />}
                          label="no"
                        />
                      </div>
                    </RadioGroup>
                  )}
                  name="RadioGroup"
                  control={control}
                />
              </section>
              <section>
                <Typography
                  sx={{
                    paddingTop: "35px",
                    fontWeight: "bold",
                    paddingBottom: "15px",
                  }}
                  variant="subtitle1"
                >
                  PERSONS CONSULTED IN DEVELOPMENT, REVIEW AND APPROVAL OF SWMS
                  :
                </Typography>
                <Typography
                  sx={{ paddingTop: "20px", textAlign: "center" }}
                  variant="body2"
                >
                  <b>Key Concepts</b>
                  <br />
                  <b>Hazard-</b>Something in the work environment that has the
                  potential to cause harm to a person (injury, illness or
                  death).
                  <br />
                  <b>Risk-</b> The chance (or likelihood) that a hazard will
                  cause that harm.
                  <br />
                  <b>Control Measure-</b> A thing, work process or system of
                  work that controls the OHS hazard or risk
                  <br />
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    paddingTop: "30px",
                    textAlign: "center",
                  }}
                >
                  OHS Risk Matrix and PPE Guide
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    paddingTop: "10px",
                    paddingBottom: "8px",
                    textAlign: "center",
                  }}
                >
                  To be used to assess the risk rating for identified risks
                </Typography>
                <img src={pic} alt="" width="770" height="370"></img>
              </section>
              <Box sx={{ textAlign: "right" }}>
                <Button
                  type="submit"
                  value="submit"
                  sx={{ color: "white", bgcolor: "black" }}
                >
                  NEXT
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </React.Fragment>
    </Box>
  );
};

export default FirstPage;
