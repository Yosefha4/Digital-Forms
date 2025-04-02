import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import ReCaptchaComponent from "../components/ReCaptchaComponent";
import SignatureBox from "../components/SignatureBox";
import CustomButton from "../components/CustomButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BackBtnStyles } from "../theme";

const PronouncementPage = () => {
  const [signature, setSignature] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const signRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Todo: handle submit
  };

  const handleDrawSignature = () => {
    setIsEmpty(false);
    if (!signRef?.current) return;
    console.log(signRef.current);
    const canvas = signRef.current.getCanvas();
    const updatedSignatureDataUrl = canvas.toDataURL();
    setSignature(updatedSignatureDataUrl);
  };

  const handleReset = () => {
    // console.log(signRef.current.isEmpty());
    setIsEmpty(true);
    if (signRef && signRef.current) {
      signRef.current.clear();
    }
  };
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        width: "650px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        paddingLeft: "26px",
        paddingRight: "20px",
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          fontSize: "3em",
        }}
      >
        <Typography variant={"h1"}>הצהרה וחתימה </Typography>
        <Box
          sx={{
            marginTop: "1em",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h3">בחתימתי אני מאשר/ת את הרשום מטה:</Typography>
          <Typography variant="h3" color="#2779c3">
            בהתאם לבקשתך סך החיוב בהוראת הקבע בחשבונך לא יוקטן מס' אסמכתא יישלח לסלולארי שלך בדקות הקרובות.{" "}
          </Typography>
          <Typography variant="h3">
            ידוע לי ואני מסכימ/ה כי על מסירת מידע אישי באתר ושירותיו <br />
            תחול{"  "}
            <a
              style={{
                color: "rgb(39, 121, 195)",
                textDecoration: "underline",
                fontSize: "21px",
                cursor: "pointer",
              }}
              href="https://www.mei-avivim.co.il/%d7%9e%d7%93%d7%99%d7%a0%d7%99%d7%95%d7%aa-%d7%94%d7%a4%d7%a8%d7%98%d7%99%d7%95%d7%aa/"
              target="_blank"
            >
              מדיניות הפרטיות של מי אביבים
            </a>
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={4}>
        <ReCaptchaComponent />
      </Box>
      <Box>
        <SignatureBox sigRef={signRef} handleResetSign={handleReset} handleDrawSignature={handleDrawSignature} />{" "}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <CustomButton label={"חזרה"} styles={BackBtnStyles} icon={<ArrowForwardIcon />} />
        <CustomButton label={"שלח"} styles={{ width: 254 }} type={"submit"} disabled={isEmpty} />
      </Box>
    </Box>
  );
};

export default PronouncementPage;
