import { Box } from "@mui/material";
import FormPage from "../components/Form";
import FormWithStepper from "../components/FormWithStepper";

const WelcomePage = () => {
  return (
    <Box
      sx={{
        width: "650px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <FormPage />
      {/* <FormWithStepper/> */}
    </Box>
  );
};

export default WelcomePage;
