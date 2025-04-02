import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignatureBox = ({ width = 350, height = 200, sigRef, handleDrawSignature, handleResetSign, isSubmitted }) => {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleResetSignature = () => {
    handleResetSign();
    setIsEmpty(true);
  };

  return (
    <>
      <Typography variant="h4">חתימה *</Typography>
      <Box
        sx={{
          width: width,
          height: height,
          border: "1px dashed rgba(39,125,201,0.51)",
          cursor: "crosshair",
          bgcolor: isEmpty && isSubmitted ? "#ffefef" : "transparent",
          borderRadius: "4px",
          maxWidth: { xs: "300px", sm: "300px", md: "100%" },
        }}
      >
        <SignatureCanvas
          ref={sigRef}
          penColor="black"
          canvasProps={{ width, height }}
          minWidth={1}
          maxWidth={1}
          velocityFilterWeight={0.1}
          onEnd={handleDrawSignature}
          onBegin={() => setIsEmpty(false)}
        />
      </Box>
      <Typography
        onClick={handleResetSignature}
        component={"button"}
        sx={{
          color: "#646464",
          fontSize: "1em",
          cursor: "default",
          textDecoration: "underline",
          textDecorationStyle: "solid",
          bgcolor: "transparent",
          border: "none",
          padding: 0,
        }}
      >
        נקה חתימה
      </Typography>
      {isEmpty && isSubmitted && (
        <Typography
          sx={{
            color: "#2e506d",
            fontSize: "1em",
          }}
        >
          שדה חובה
        </Typography>
      )}
    </>
  );
};

export default SignatureBox;
