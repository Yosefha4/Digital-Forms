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

export const theme = createTheme({
  direction: "rtl",
  palette: {
    ...defaultPalette,
  },
  typography: {
    fontFamily: ["Heebo", "Arial", "sans-serif"].join(","),
    allVariants: {
      color: defaultPalette.text.primary,
    },
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: defaultPalette.text.primary,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: defaultPalette.text.primary,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      color: defaultPalette.text.primary,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 500,
      color: defaultPalette.text.secondary,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: defaultPalette.text.secondary,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: defaultPalette.text.secondary,
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
            color: defaultPalette.text.secondary,
          },
          "& .MuiInputBase-root": {
            outline: "none",
            padding: "1px 0",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
        },
        '&.Mui-error': {
          borderBottom: `0.2px solid ${defaultPalette.text.error}`,
        },
      },
      variants: [
        {
          props: { variant: "standard" },
          style: {
            borderBottom: `0.2px solid ${defaultPalette.text.secondary}`,
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
          backgroundColor: defaultPalette.text.primary,
          color: defaultPalette.text.secondary,
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
          color: defaultPalette.text.secondary,
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
            color: defaultPalette.primary.main,
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
          backgroundColor: defaultPalette.primary.main,
          color: defaultPalette.primary.contrastText,
          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            backgroundColor: defaultPalette.primary.dark || "#005cb2",
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
          borderColor: defaultPalette.primary.main,
          borderTopWidth: 2,
          borderRadius: 1,
        },
        activeLine: {
          borderColor: defaultPalette.primary.main,
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
          color: defaultPalette.text.primary,
          fontSize: "1rem",
          lineHeight: "28px",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          backgroundColor: defaultPalette.text.secondary,
          color: defaultPalette.text.primary,
        },
        '&.Mui-completed': {
          backgroundColor: defaultPalette.text.secondary,
          color: defaultPalette.text.primary,
        },
        '&.Mui-active': {
          backgroundColor: defaultPalette.text.secondary,
          color: defaultPalette.text.primary,
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

