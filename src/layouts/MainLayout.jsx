import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgImage from "./../assets/main-bg-svg.svg";
import useViewport from "../hooks/useViewport";
import MobileBg from "../assets/mobile-bg.png";

const MainLayout = () => {
  const { isDesktop, isMobile } = useViewport(); // Access the screen size states

  if (isMobile) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          overflowX: "hidden",
          // overflowY: 'hidden',
          backgroundColor: isDesktop ? "transparent" : "#fff", // White background for non-desktop
        }}
      >
        <Box
          component="img"
          src={isMobile ? MobileBg : bgImage}
          alt="Background"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "40vh",
            objectFit: "cover",
            zIndex: 99999,
          }}
        />
        <Navbar />

        {/* Scrolling content */}
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            component={"a"}
            href="https://www.mei-avivim.co.il/%d7%a0%d7%92%d7%99%d7%a9%d7%95%d7%aa/"
            target="_blank"
            sx={{
              position: "fixed",
              right: 0,
              bottom: 0,
              color: "#0000c0",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            הצהרת נגישות
          </Typography>
          <Outlet />
        </Box>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        paddingBottom: 8,
        paddingLeft: "26px",
        paddingRight: "20px",
        backgroundColor: isDesktop ? "transparent" : "#fff", // White background for non-desktop
      }}
    >
      <Navbar />

      {isDesktop && (
        <Box
          component="img"
          src={bgImage}
          alt="Background"
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100%",
            zIndex: -1,
          }}
        />
      )}

      {/* Scrolling content */}
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Typography
          component={"a"}
          href="https://www.mei-avivim.co.il/%d7%a0%d7%92%d7%99%d7%a9%d7%95%d7%aa/"
          target="_blank"
          sx={{
            position: "fixed",
            right: 0,
            bottom: 0,
            color: "#0000c0",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          הצהרת נגישות
        </Typography>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
