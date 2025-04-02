import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MuiSelectInput = ({ label, value, handleChange, width, items }) => {
  return (
    <FormControl variant="standard">
      <InputLabel id={label}>{label ? label : "Age"}</InputLabel>
      <Select labelId={label} id={label} value={value} label={label} onChange={handleChange}>
        {items?.map((item, index) => (
          <MenuItem key={item.STREET_CODE} value={item.STREET_NAME}>
            {item.STREET_NAME}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MuiSelectInput;
