import React, { useEffect, useRef, useState } from "react";
import CustomInput from "./CustomInput";
import { Box, Typography } from "@mui/material";
import FileInput from "./FileInput";
import MuiDatePicker from "./MuiDatePicker";
import CustomRadioGroup from "./CustomRadioGroup";
import ReCaptchaComponent from "./ReCaptchaComponent";
import ApprovalCheckbox from "./ApprovalCheckbox";
import AccDetails from "../assets/accountDetails.png";
import Bg1 from "../assets/get-in.png";
import Bg1Check from "../assets/get-in_active.png";
import CustomButton from "./CustomButton";
import Policy from "./Policy";
import SignatureBox from "./SignatureBox";
import MuiSelectInput from "./MuiSelectInput";
import { useLazyGetStreetsQuery } from "../services/apiService";

// Dev demo user
// AccNum -  10353102
// ID -      500250006

const radioGroup = [
  { label: "אדם פרטי", value: "val1", bgImage: Bg1, bgCheck: Bg1Check },
  { label: "אדם פרטי", value: "val2", bgImage: Bg1, bgCheck: Bg1Check },
  // { label: "עסק או תאגיד", value: "val2" ,bgImage: Bg1, bgCheck: Bg1Check},
];

const cities = [
  { label: "נחלת בנימין", value: "val1" },
  { label: "דוד המלך", value: "val2" },
  { label: "טסט", value: "val3" },
];

const FormPage = () => {
  const [id, setId] = useState("");
  const signRef = useRef(null);
  const [signature, setSignature] = useState("");
  const [recaptchValue, setRecaptchValue] = useState("");
  const [userStreet, setUserStreet] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [getStreets, { data: streetsData, isSuccess: isSuccessGetStreets, isError, error }] = useLazyGetStreetsQuery(); // TODO: get the user city (status code) by the contractNumber to pass to the query

  // isSuccessGetStreets && console.log(streetsData.STREETS_ROW);

  const handleReset = () => {
    if (signRef && signRef.current) {
      signRef.current.clear();
    }
  };
  const handleDrawSignature = () => {
    if (!signRef?.current) return;
    const canvas = signRef.current.getCanvas();
    const updatedSignatureDataUrl = canvas.toDataURL();
    setSignature(updatedSignatureDataUrl);
  };

  const handleRecaptcha = (value) => {
    setRecaptchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(userStreet);
    //TODO: Make API (RTKQ) call with form data
  };

  // useEffect(() => { // TODO: Uncomment in real time
  //   if (/^[a-zA-Z0-9]{6,12}$/.test(id)) {
  //     getStreets({ city: 246 });
  //   }
  // }, [id]);

  return (
    <Box
      gap={6}
      display={"flex"}
      flexDirection={"column"}
      component={"form"}
      onSubmit={handleSubmit}
      pb={8}
      sx={{
        maxWidth: { xs: "380px", sm: "380px", md: "100%" },
        paddingX: "20px",
      }}
    >
      <Box>
        <Box
          sx={{
            boxSizing: "border-box",
            fontSize: "3em",
            maxWidth: { xs: "380px", sm: "390px", md: "100%" },
          }}
        >
          <Typography variant="h1">רוצים לעדכן את קריאת מד המים?</Typography>
          <Box
            sx={{
              marginTop: "0.7em",
              maxWidth: { xs: "350px", md: "100%" },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography
              variant="body1"
              fontSize={{
                xs: "16px",
                md: "1.31rem",
              }}
            >
              קריאת מד המים מתבצעת על ידנו אחת לחודשיים ומהווה את הבסיס לחיובי המים שלכם.{" "}
            </Typography>
            <Typography
              variant="body1"
              fontSize={{
                xs: "16px",
                md: "1.31rem",
              }}
            >
              כל עוד לא ניתן לקרוא את מד המים לדוגמה עקב שיחים מסתירים, שער נעול וכדומה ‒ תיקבע הצריכה על פי הערכה.{" "}
            </Typography>
            <Typography
              variant="body1"
              fontSize={{
                xs: "16px",
                md: "1.31rem",
              }}
            >
              כדי שנוכל לחייב אתכם על פי הצריכה בפועל, אנו מבקשים מכם לעדכן אותנו בפרטי הקריאה כפי שרשומים במד המים.{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
      `
      <Box
        sx={{
          display: "flex",
          gap: 5,
          alignItems: "start",

          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
        }}
      >
        <CustomInput
          id={"input1"}
          label={"מספר חשבון חוזה"}
          required={true}
          explain={true}
          multyChoice={[
            {
              label: "תעודת זהות או ח.פ",
              value: "idNumber",
            },
            {
              label: "דרכון",
              value: "passportNumber",
            },
          ]}
          regex={/^[a-zA-Z0-9]{6,12}$/}
          value={id}
          setter={setId}
          errorMessage={"מספר תעודת זהות או ח.פ לא תקין"}
          isSubmitted={isSubmitted}
          tooltipBg={AccDetails}
          tooltipStyle={{
            border: "2px solid rgb(204, 204, 204)",
            borderRadius: 5,
            position: "absolute",
            transform: "translate(10%, -50%)",
          }}
        />
        <CustomInput id={"input2"} label={"שם משתמש"} regex={null} />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 5,
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
        }}
      >
        <CustomInput id={"input2"} label={"שם משתמש"} regex={null} />
        <CustomInput id={"input2"} label={"שם משתמש"} regex={null} />
      </Box>
      <Box>
        <MuiSelectInput label={"רחוב *"} handleChange={(e) => setUserStreet(e.target.value)} items={streetsData?.STREETS_ROW} />
      </Box>
      <Box mt={3}>
        <MuiDatePicker />
      </Box>
      <Box>
        <SignatureBox
          sigRef={signRef}
          handleResetSign={handleReset}
          isSubmitted={isSubmitted}
          handleDrawSignature={handleDrawSignature}
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <FileInput
            name={"הוספת קבצים"}
            styles={{
              border: "2px dotted rgba(39, 125, 201, 0.31)",
            }}
          />
          {/* <MuiDatePicker /> */}
        </Box>

        <CustomRadioGroup group={radioGroup} />
        {/* <ReCaptchaComponent handleChange={handleRecaptcha} error={isSubmitted && recaptchValue.length === 0} /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <Policy />
          <ApprovalCheckbox />
        </Box>
      </Box>
      <Box>
        <CustomButton label={"לשלב הבא"} type={"submit"} />
      </Box>
    </Box>
  );
};

export default FormPage;
