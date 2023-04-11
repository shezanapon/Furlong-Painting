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
import { Controller, useController, useForm } from "react-hook-form";

const FirstCollapse = () => {
  const { handleSubmit, reset, setValue, control } = useForm({});
  const handleFinalSubmit = (data) => {
    console.log(data);
  };
  const [show, setShow] = useState(false);
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
      <Typography variant="subtitle1">
        Workers or others catching COVID-19 (could result in serious illness or
        death).
      </Typography>
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
            Inherent Risk Rating - (Workers or others catching COVID-19 (could
            result in serious illness or death))
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

export default FirstCollapse;
