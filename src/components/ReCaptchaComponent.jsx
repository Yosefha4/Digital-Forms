import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptchaComponent = ({ handleChange, error }) => {
  const recaptchRef = useRef();
  const handleRecaptchaChange = () => {
    const recaptchValue = recaptchRef.current.getValue();
    handleChange(recaptchValue);
  };
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <ReCAPTCHA sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY} ref={recaptchRef} onChange={handleRecaptchaChange} />
      {error && (
        <Typography
          sx={{
            color: "text.error",
            fontSize: "1em",
          }}
        >
          שדה אבטחה שדה חובה
        </Typography>
      )}
    </Box>
  );
};

export default ReCaptchaComponent;
