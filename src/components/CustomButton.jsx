import { Button } from "@mui/material";

const CustomButton = ({ label, handleClick, btnWidth, type, styles, icon, disabled = false }) => {
  return (
    <Button
      onClick={handleClick}
      variant="contained"
      type={type}
      disabled={disabled}
      startIcon={icon ? icon : <></>}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
