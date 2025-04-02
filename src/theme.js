import { createTheme } from "@mui/material/styles";
import "@fontsource/heebo/300.css";
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/500.css";
import "@fontsource/heebo/700.css";

const defaultPalette = {
  primary: {
    main: "#277dc9",
    contrastText: "#fff",
    dark: "#005cb2",
  },
  secondary: {
    main: "#dc004e",
    contrastText: "#fff",
  },
  warning: {
    main: "#FF4000",
    contrastText: "#fff",
  },
  accent: {
    main: "#9CADF5",
    contrastText: "#fff",
  },
  text: {
    primary: "#323B65",
    secondary: "#2e506d",
    error: "#cd0000",
  },
};

export const createAppTheme = (customPalette = {}) => {
  const palette = {
    ...defaultPalette,
    ...customPalette,
  };

  return createTheme({
    direction: "rtl",
    palette,
    typography: {
      fontFamily: ["Heebo", "Arial", "sans-serif"].join(","),
      allVariants: {
        color: palette.text.primary,
      },
      h1: {
        fontSize: "3rem",
        fontWeight: 700,
        color: palette.text.primary,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 700,
        color: palette.text.primary,
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 500,
        color: palette.text.primary,
      },
      h4: {
        fontSize: "1rem",
        fontWeight: 500,
        color: palette.text.secondary,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.5,
        color: palette.text.secondary,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
        color: palette.text.secondary,
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            maxWidth: 280,
            width: 280,
            "& .MuiInputBase-root.Mui-focused": {
              border: "none",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1rem",
              color: palette.text.secondary,
            },
            "& .MuiInputBase-root": {
              outline: "none",
              padding: "1px 0",
            },
            "& .MuiInput-underline:after": {
              borderBottom: "none",
            },
          },
          error: {
            borderBottom: `0.2px solid ${palette.text.error}`,
          },
        },
        variants: [
          {
            props: { variant: "standard" },
            style: {
              borderBottom: `0.2px solid ${palette.text.secondary}`,
            },
          },
        ],
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            cursor: "pointer",
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: palette.text.primary,
            color: palette.text.secondary,
            fontSize: "0.875rem",
            boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            maxWidth: 600,
            margin: "0 auto",
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            color: palette.text.secondary,
            paddingLeft: 8,
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "normal",
            "& .MuiFormControlLabel-label": {
              whiteSpace: "normal",
              lineHeight: 1.5,
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "gray",
            "&.Mui-checked": {
              color: palette.primary.main,
            },
            marginBottom: 20,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: "0.75em 2em",
            minHeight: "3em",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: palette.primary.main,
            color: palette.primary.contrastText,
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              backgroundColor: palette.primary.dark || "#005cb2",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            outline: "none",
            maxWidth: 280,
            width: 280,
            padding: 0,
            fontSize: "1rem",
          },
          select: {
            // Additional select-specific styling can be added here.
          },
        },
      },
      MuiStepper: {
        styleOverrides: {
          root: {
            marginTop: 12,
          },
        },
      },
      MuiStepConnector: {
        styleOverrides: {
          root: {
            mx: "1em",
          },
          line: {
            borderColor: palette.primary.main,
            borderTopWidth: 2,
            borderRadius: 1,
          },
          activeLine: {
            borderColor: palette.primary.main,
          },
        },
      },
      MuiStepLabel: {
        styleOverrides: {
          labelContainer: {
            position: "relative",
            top: -50,
          },
          label: {
            color: palette.text.primary,
            fontSize: "1rem",
            lineHeight: "28px",
          },
        },
      },
      MuiStepIcon: {
        styleOverrides: {
          root: {
            backgroundColor: palette.text.secondary,
            color: palette.text.primary,
          },
          completed: {
            backgroundColor: palette.text.secondary,
            color: palette.text.primary,
          },
          active: {
            backgroundColor: palette.text.secondary,
            color: palette.text.primary,
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            fontSize: "1rem",
            width: "20%",
            border: "none",
          },
        },
      },
    },
  });
};

export const BackBtnStyles = {
  bgcolor: "rgb(249, 249, 249);",
  color: "rgb(39, 125, 201);",
  paddingX: "2em",
  boxShadow: "none",
  ":hover": {
    backgroundColor: "text.secondary",
    boxShadow: "none",
    color: "white",
  },
};

export default createAppTheme;
