import { Box, Typography } from "@mui/material";

const Policy = () => {
  return (
    <Box
      sx={{
        color: "#006aff",
        fontSize: "1em",
        maxWidth: { xs: "320px", sm: "340px", md: "100%" },
        textAlign: { xs: "center", sm: "start" },
      }}
    >
      <Typography fontSize={'16px'} color="#006aff">ידוע לי ואני מסכים כי על מסירת מידע אישי באתר ושירותיו תחול</Typography>
      <Typography
        component={"a"}
        fontSize={'16px'}
        sx={{ display: "inline", textDecoration: "underline", cursor: "pointer", color: "inherit" }}
        href="https://www.mei-avivim.co.il/%d7%9e%d7%93%d7%99%d7%a0%d7%99%d7%95%d7%aa-%d7%94%d7%a4%d7%a8%d7%98%d7%99%d7%95%d7%aa/"
        target="_blank"
      >
        מדיניות הפרטיות של מי אביבים
      </Typography>
    </Box>
  );
};

export default Policy;
