import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const SecondCollapse = () => {
  const [show, setShow] = useState(false);
  const { handleSubmit, reset, setValue, control } = useForm({});
  const handleFinalSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box>
      <br />

      <Typography variant="h5">Hazardous Material</Typography>
      <br />
      <Divider></Divider>
      <br />
      <br />
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        What are the hazards and risks?
      </Typography>
      <br />
      <Typography>Dermatitis</Typography>
      <br />
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            onClick={() => setShow(!show)}
            value="yes"
            control={<Radio />}
            label="yes"
          />
          <FormControlLabel
            onClick={() => setShow(false)}
            value="no"
            control={<Radio />}
            label="no"
          />
        </RadioGroup>
      </FormControl>
      {show && (
        <Box>
          <Typography sx={{ paddingBottom: "16px", paddingTop: "16px" }}>
            Inherent Risk Rating - (Dermatitis)
          </Typography>

          <form onSubmit={handleSubmit((data) => handleFinalSubmit(data))}>
            <section>
              <Controller
                name="MUI_Slider"
                control={control}
                defaultValue={[0, 4]}
                render={({ field }) => (
                  <Slider
                    sx={{ width: "350px", height: "8px", color: "#a8cbee" }}
                    {...field}
                    onChange={(_, value) => {
                      field.onChange(value);
                    }}
                    valueLabelDisplay="auto"
                    max={4}
                    step={1}
                  />
                )}
              />
            </section>
          </form>
          <br />
          <Typography
            variant="subtitle1"
            sx={{ color: "#1976d2", fontWeight: "bold", paddingBottom: "15px" }}
          >
            How will the hazards and risk be controlled?
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Staff and contractors have been briefed on symptoms of COVID-19 and
            have been told to stay home if they aren’t feeling well. Hygiene
          </Typography>
          <Typography sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
            Residual Risk Rating - (Dermatitis)
          </Typography>
          <form onSubmit={handleSubmit((data) => handleFinalSubmit(data))}>
            <section>
              <Controller
                name="MUI_Slider"
                control={control}
                defaultValue={[0, 4]}
                render={({ field }) => (
                  <Slider
                    sx={{ width: "350px", height: "8px", color: "#a8cbee" }}
                    {...field}
                    onChange={(_, value) => {
                      field.onChange(value);
                    }}
                    valueLabelDisplay="auto"
                    max={4}
                    step={1}
                  />
                )}
              />
            </section>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default SecondCollapse;
