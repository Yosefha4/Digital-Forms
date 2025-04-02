import { Box, Button, Step, StepConnector, StepIcon, StepLabel, Stepper, Typography } from "@mui/material";
import DoneImage from "../assets/num-v.png";
import { BackBtnStyles } from "../theme";

const MuiStepper = ({ steps, activeStep, handleNext, handleBack }) => {
  return (
    <Box>
      {/* Stepper Component */}
      <Stepper
        sx={{
          mt: 12,
        }}
        activeStep={activeStep}
        alternativeLabel
        connector={
          <StepConnector
            sx={{
              marginX: 1,
              "& .MuiStepConnector-line": {
                borderColor: "#3b86ff",
                borderTopWidth: 2,
                borderRadius: 1,
              },
              "&.Mui-active .MuiStepConnector-line, &.Mui-completed .MuiStepConnector-line": {
                borderColor: "#3b86ff",
              },
            }}
          />
        }
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              sx={{
                color: "#2E506D",
                fontSize: "1.1em",
                letterSpacing: "-0.26px",
                lineHeight: "28px",
                textAlign: "center",
              }}
              slots={{
                stepIcon: ({ active, icon, completed, ...otherProps }) => {
                  if (completed) {
                    return (
                      <StepIcon
                        {...otherProps}
                        icon={
                          <img
                            src={DoneImage}
                            style={{
                              width: "71px",
                              height: "74px",
                              borderRadius: "50%",
                              cursor: "pointer",
                              transform: "translate(0%, -35%)",
                              color: "#2E506D",
                            }}
                            alt="active step icon"
                          />
                        }
                      />
                    );
                  } else if (active) {
                    return (
                      <StepIcon
                        {...otherProps}
                        icon={
                          <img
                            src={step?.image}
                            style={{
                              width: "71px",
                              height: "74px",
                              borderRadius: "50%",
                              cursor: "pointer",

                              transform: "translate(0%, -35%)",
                            }}
                            alt="active step icon"
                          />
                        }
                      />
                    );
                  }
                  return (
                    <StepIcon
                      {...otherProps}
                      icon={
                        <div
                          style={{
                            border: "2px solid #3b86ff",
                            borderRadius: "50%",
                            height: "53.5px",
                            width: "53.5px",
                            position: "relative",
                            transform: "translate(0%, -30%)",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              top: "20%",
                              fontSize: "1.625em",
                              color: "#3b86ff",
                              fontWeight: "bold",
                            }}
                          >
                            {index + 1}
                          </span>
                        </div>
                      }
                    />
                  );
                },
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step Content */}
      <Box>
        {activeStep === steps.length ? (
          <Box>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        ) : (
          <Box>
            <Typography>{steps[activeStep].label}</Typography>
            <Box mt={2}>
              {steps[activeStep].content}

              <Box style={{ marginTop: "20px" }}>
                <Button disabled={activeStep === 0} sx={BackBtnStyles} onClick={handleBack} variant="contained" color="primary">
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MuiStepper;
