import { useTheme, useMediaQuery } from "@mui/material";

const useViewport = () => {
  const theme = useTheme();


  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); 
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); 
  const isLandscape = useMediaQuery("(orientation: landscape)");

  return { isMobile, isTablet, isDesktop, isLandscape };
};

export default useViewport;
