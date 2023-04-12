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

const SecondCollapse4 = () => {
  const { handleSubmit, reset, setValue, control } = useForm({});
  const handleFinalSubmit = (data) => {
    console.log(data);
  };
  const [show, setShow] = useState(false);
  return (
    <Box>
      <br />

      <Typography variant="h5">Environmental - incidient/spills</Typography>
      <br />
      <Divider></Divider>
      <br />
      <br />
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        What are the hazards and risks?
      </Typography>
      <br />
      <Typography>
        Flying Objects - Struck by flying object -
        <span>
          <Typography variant="p" sx={{ color: "red" }}>
            Is it a risk at this site?
          </Typography>
        </span>
      </Typography>
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
          <Typography
            variant="subtitle1"
            sx={{
              color: "#1976d2",
              fontWeight: "bold",
              paddingBottom: "16px",
              paddingTop: "16px",
            }}
          >
            How will the hazards and risks be controlled?
          </Typography>

          <br />
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", marginBottom: "30px" }}
          >
            Fixed barrier between driver cabin and storage area of the vehicle
          </Typography>
          <br />
          <Typography variant="p">Inherent Risk Rating</Typography>

          <form onSubmit={handleSubmit((data) => handleFinalSubmit(data))}>
            <section>
              <Controller
                name="Slider1"
                control={control}
                defaultValue={[0, 4]}
                render={({ field }) => (
                  <Slider
                    sx={{
                      width: "350px",
                      height: "8px",
                      color: "#a8cbee",
                      marginTop: "10px",
                    }}
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

          <Typography variant="p">Residual Risk Rating</Typography>
          <form onSubmit={handleSubmit((data) => handleFinalSubmit(data))}>
            <section>
              <Controller
                name="Slider2"
                control={control}
                defaultValue={[0, 4]}
                render={({ field }) => (
                  <Slider
                    sx={{
                      width: "350px",
                      height: "8px",
                      color: "#a8cbee",
                      marginTop: "15px",
                    }}
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

export default SecondCollapse4;
