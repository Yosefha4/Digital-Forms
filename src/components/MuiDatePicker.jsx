import { Input, InputAdornment } from "@mui/material";
import { DatePicker, DateRangeIcon } from "@mui/x-date-pickers";

const MuiDatePicker = ({ setter }) => {
  const handleDateChange = (e) => {
    const newDate = new Date(e.$d).toLocaleDateString();
    setter(newDate);
  };
  return (
    <DatePicker
      onChange={handleDateChange}
      sx={{
        width: "100%",
        maxWidth: "280px",
      }}
      label="*תאריך קריאה"
      renderInput={(params) => (
        <Input
          required
          variant="outlined"
          {...params}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            },
          }}
          sx={{
          
            "& .MuiOutlinedInput-root": {
              border: "none",
              boxShadow: "none",
            },
            "& .MuiInputBase-root": {
              padding: 0,
              bgcolor: "red",
            },

            "& .MuiInputLabel-root": {
              display: "none",
              bgcolor: "red",
            },
          }}
        />
      )}
    />
  );
};

export default MuiDatePicker;
