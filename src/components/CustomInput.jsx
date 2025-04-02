import { Box, FormControlLabel, IconButton, Radio, RadioGroup, TextField, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TooltipModal from "./TooltipModal";
import { ValidID } from "../utils/helperFunctions";

const CustomInput = ({
  id,
  label,
  type,
  variant,
  required,
  value,
  setter,
  handleChange,
  explain,
  regex,
  errorMessage,
  tooltipBg,
  tooltipStyle,
  multyChoice,
  isSubmitted,
  width,
}) => {
  const [error, setError] = useState(isSubmitted || false);
  const [errorText, setErrorText] = useState("");

  const [selectedLabel, setSelectedLabel] = useState(multyChoice ? multyChoice[0].label : label);

  const defaultRadioValue = multyChoice && multyChoice.length > 0 ? value || multyChoice[0].value : "";
  const [selectedValue, setSelectedValue] = useState(defaultRadioValue);

  const validateInputField = () => {
    if (id === "idNumber") {
      if (required && value.trim() === "") {
        setError(true);
        setErrorText("שדה חובה");
      } else if (!ValidID(value.trim())) {
        setError(true);
        setErrorText(errorMessage || "Invalid input format");
      } else {
        setError(false);
        setErrorText("");
      }
    } else {
      // Default validation for other inputs
      if (required && value.trim() === "") {
        setError(true);
        setErrorText("שדה חובה");
      } else if (regex && !regex.test(value.trim())) {
        setError(true);
        setErrorText(errorMessage || "Invalid input format");
      } else {
        setError(false);
        setErrorText("");
      }
    }
  };

  const handleBlur = () => {
    validateInputField();
  };

  const handleInputChange = (event) => {
    setter(event.target.value);
    if (error) {
      setError(false);
      setErrorText("");
    }
    if (handleChange) {
      handleChange(event);
    }
  };

  const handleRadioChange = (event) => {
    setter(event.target.value);
    setSelectedValue(event.target.value); // Update the selected value when the radio button changes

    const selectedOption = multyChoice.find((option) => option.value === event.target.value);
    if (selectedOption) {
      setSelectedLabel(selectedOption.label);
    }
  };

  useEffect(() => {
    isSubmitted && validateInputField();
  }, [isSubmitted]);

  return (
    <Box display={"flex"} flexDirection={"column-reverse"}>
      {multyChoice && (
        <Box>
          <RadioGroup row value={selectedValue} onChange={handleRadioChange} tabIndex={0}>
            {multyChoice.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option.value}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "17px",
                    height: "auto",
                    color: "rgba(0,0,0,.6)",
                  },
                }}
                control={<Radio tabIndex={0} />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </Box>
      )}
      <Box>
        <TextField
          id={id}
          label={multyChoice ? selectedLabel : selectedLabel}
          type={type || "text"}
          variant={variant || "standard"}
          size="medium"
          onBlur={handleBlur}
          onChange={handleInputChange}
          tabIndex={0}
          sx={{
            borderBottom: error ? "0.2px solid red" : "none",
            // borderBottom: error ? "0.2px solid red" : "0.2px solid #2b2c32",
            width: width || "280px",
          }}
          slotProps={{
            htmlInput: {
              title: "",
            },
            input: {
              endAdornment: explain && (
                <Tooltip title={<TooltipModal backgroundImg={tooltipBg} style={tooltipStyle} />}>
                  <IconButton edge="end" disableRipple>
                    <HelpOutlineOutlinedIcon size={"10px"} sx={{ width: "20px", height: "auto", cursor: "auto" }} />
                  </IconButton>
                </Tooltip>
              ),
            },
          }}
        />
        {error && (
          <Typography sx={{ fontSize: "1em", marginTop: "4px", color: "#2e506d", maxWidth: 300 }}>{errorText}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default CustomInput;
