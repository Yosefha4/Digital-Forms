import React, { useState } from "react";
import { TextField, Checkbox, FormControlLabel, Box } from "@mui/material";
import MuiStepper from "./MuiStepper";
import step1 from "../assets/num-1-active.png";
import step2 from "../assets/num-2-active.png";
import step3 from "../assets/num-3-active.png";

const FormWithStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    step1Input: "",
    step2Checkbox: false,
    step3Input: "",
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      step1Input: "",
      step2Checkbox: false,
      step3Input: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  // Define steps with relevant form inputs
  const steps = [
    {
      label: "מי נכנס",
      content: (
        <TextField
          label="Input for Step 1"
          name="step1Input"
          value={formData.step1Input}
          onChange={handleInputChange}
          fullWidth
        />
      ),
      image: step1,
    },
    {
      label: "מסמכים",
      content: (
        <FormControlLabel
          control={<Checkbox checked={formData.step2Checkbox} onChange={handleCheckboxChange} name="step2Checkbox" />}
          label="Check this for Step 2"
        />
      ),
      image: step2,
    },
    {
      label: "סה טו",
      content: (
        <TextField
          label="Input for Step 3"
          name="step3Input"
          value={formData.step3Input}
          onChange={handleInputChange}
          fullWidth
        />
      ),
      image: step3,
    },
  ];

  return (
    <Box>
      {/* <h2>Form with Stepper</h2> */}
      <MuiStepper
        steps={steps}
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
        handleReset={handleReset}
      />
    </Box>
  );
};

export default FormWithStepper;
