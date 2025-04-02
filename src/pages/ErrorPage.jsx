import { Box, Typography } from "@mui/material";
import ErrorImage from "../assets/errorPage.png";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <img src={ErrorImage} alt="error" />
      <Typography variant="h2">אופס.. מצטערים אירעה שגיאה לא צפויה</Typography>
      <Typography variant="body2">אפשר לנסות שוב או לפנות לשירות הלקוחות שלנו בטלפון - 3202*</Typography>
    </Box>
  );
};

export default ErrorPage;
