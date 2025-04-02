import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

const CustomRadioGroup = ({ group }) => {
  return (
    <FormControl>
      <RadioGroup
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {group &&
          group.map((item, index) => (
            <FormControlLabel
              key={index + item.value}
              sx={{
                width: "220px",
                height: "220px",
              }}
              control={
                <Radio
                  icon={<></>}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundImage: `url(${item.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderStyle: "none",
                    margin: 0,
                    transition: "none",
                    "&.Mui-checked": {
                      backgroundImage: `url(${item.bgCheck})`,
                      transition: "none",
                    },
                    "&.Mui-checked .MuiSvgIcon-root": {
                      display: "none",
                      transition: "none",
                    },
                    ":hover": {
                      transition: "none",
                      bgcolor: "transparent",
                    },
                  
                  }}
                />
              }
              value={item.value}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioGroup;
