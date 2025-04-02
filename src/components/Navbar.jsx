import { Box } from "@mui/material";
import Logo from "../assets/ma-logo.png";
import useViewport from "../hooks/useViewport";

const Navbar = () => {
  const { isMobile } = useViewport();
  return (
    <Box
      sx={{
        overflow: "hidden",
        boxSizing: "border-box",
        marginBottom: "100px",
        display: isMobile ? "flex" : "static",
        justifyContent: isMobile ? "center" : "start",
      }}
    >
      <img
        style={{
          display: "block",
          borderStyle: "none",
          height: "auto",
          position: isMobile ? "static" : "absolute",
          top: 0,
          marginTop: "5px",
          paddingRight: "20px",
        }}
        src={Logo}
      />
    </Box>
  );
};

export default Navbar;
