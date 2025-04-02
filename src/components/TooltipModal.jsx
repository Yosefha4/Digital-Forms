import { Box } from "@mui/material";

const TooltipModal = ({ backgroundImg, style }) => {
  return <Box component={"img"}  alt="Background" src={backgroundImg} sx={style} />;
};

export default TooltipModal;
