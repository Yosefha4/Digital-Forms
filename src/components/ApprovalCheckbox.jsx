import { Checkbox, FormControl, FormControlLabel } from "@mui/material";

const ApprovalCheckbox = ({ setter }) => {
  const label = 'אני מאשר/ת שפרטי הטלפון והדוא"ל שציינתי ישמשו ליצירת קשר עימי בנושאי שירותי מים וביוב';
  return (
    <FormControl
      sx={{
        // maxWidth: 600,
        maxWidth: { xs: "300px", sm: "300px", md: "600px" },
      }}
    >
      <FormControlLabel
        sx={{
          fontSize: "16px",
          "& .MuiFormControlLabel-label": {
            fontSize: "16px",
          },
        }}
        label={label}
        control={<Checkbox defaultChecked size="4px" onChange={(e) => setter(e.target.checked)} />}
      />
    </FormControl>
  );
};

export default ApprovalCheckbox;
