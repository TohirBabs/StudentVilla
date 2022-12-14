import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import { Autocomplete, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { country_list } from "./Countries";
const steps = [
  {
    label: "Contact Info",
    description: (
      <>
        <TextField
          label="Full Name"
          required
          size="small"
          margin="normal"
          focused
          inputProps={{ style: { color: "white", fontFamily: "DM Sans" } }}
          sx={{
            color: "white",
            fontFamily: "lobster",
          }}
          fullWidth
        />
        <TextField
          label="Email"
          required
          size="small"
          margin="normal"
          focused
          inputProps={{ style: { color: "white", fontFamily: "DM Sans" } }}
          sx={{
            color: "white",
            fontFamily: "lobster",
          }}
        />
        <TextField
          label="Phone No"
          required
          size="small"
          margin="normal"
          focused
          inputProps={{ style: { color: "white", fontFamily: "DM Sans" } }}
          sx={{
            color: "white",
            fontFamily: "lobster",
          }}
        />

        <Autocomplete
          label="Country"
          size="small"
          options={country_list}
          renderInput={(params) => (
            <TextField
              focussed
              margin="normal"
              focused
              {...params}
              label="Country"
              inputProps={{ style: { color: "white", fontFamily: "DM Sans" } }}
            />
          )}
        />
        <TextField
          label="City"
          size="small"
          margin="normal"
          focused
          inputProps={{ style: { color: "white", fontFamily: "DM Sans" } }}
          sx={{
            color: "white",
            fontFamily: "lobster",
          }}
        />
      </>
    ),
  },
  {
    label: "Career Objective",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Education",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Experience",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Skills",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Projects",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="w-[90vw] rounded-3xl mx-auto overflow-hidden mt-8 bg-white backdrop-filter backdrop-blur-sm bg-opacity-5">
      <div className="p-4 bg-blue-600">
        <p className="sec-font text-xl">{steps[activeStep].label}</p>
      </div>
      <Box
        sx={{
          maxHeight: 400,
          maxWidth: 400,
          width: "100%",
          overflowY: "scroll",
          p: 3,
          background: "inherit",
        }}
      >
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          bgcolor: "#f05e0a",
          // backdropFilter: "blur(20px)",
        }}
        nextButton={
          <Button
            size="small"
            margin="normal"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            margin="normal"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
