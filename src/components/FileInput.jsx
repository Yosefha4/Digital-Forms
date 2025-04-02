import { Box, IconButton, Input, Typography } from "@mui/material";
import React, { useRef } from "react";
import UploadFileImg from "../assets/uploadFile.png";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
const FileInput = ({ name, styles, handleChange, value, handleReset, isSubmitted }) => {
  const fileInputRef = useRef(null);

  const handleResetFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    handleReset();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        handleChange(reader.result);
      };
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: 300,
          height: 58,
          boxSizing: "border-box",
          backgroundImage: `url(${UploadFileImg})`,
          backgroundSize: "cover",
          position: "relative",
          ...styles,
        }}
      >
        <Input
          type="file"
          name={name}
          onChange={handleFileChange}
          inputRef={fileInputRef}
          sx={{
            display: "block",
            position: "absolute",
            left: 0,
            opacity: 0,
            cursor: "pointer",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            left: "18%",
            color: "primary.main",
            fontSize: "1em",
          }}
        >
          {name}
        </Typography>
        {value && (
          <IconButton onClick={handleResetFile} size="large">
            <DeleteForeverOutlinedIcon color="error" />
          </IconButton>
        )}

        {isSubmitted && !value && (
          <Typography
            sx={{
              position: "absolute",
              top: "200%",
              left: "20%",
              transform: "translate(-50%, -50%)",
              fontSize: "1em",
              color: "text.error",
            }}
          >
            שכחת את הקובץ...
          </Typography>
        )}
      </Box>
      <Typography
        sx={{
          color: "#2e506d",
          fontSize: "13px",
          maxWidth: 280,
          textAlign: "center",
        }}
      >
        ניתן להעלות קבצים מסוג : PDF,PNG,JPG - עד משקל 5MB.
      </Typography>
    </Box>
  );
};

export default FileInput;
