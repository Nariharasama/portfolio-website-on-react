"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ArrowForwardIos } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
export default function Work() {
  return (
    <React.Fragment>
      <Stack
        className={"w-full h-[280px] lg:h-[160px] flex"}
        direction={"column"}
        alignItems={"center"}
      >
        <Box className={"w-full h-[32px] flex"}></Box>
        <Stack direction={"row"} className={"w-11/12 h-[56px] lg:h-[48px]"}>
          <Typography
            className={"text-5xl  lg:text-4xl flex h-[48px]"}
            color={"primary"}
          >
            Design and Develope:
          </Typography>
        </Stack>
        <Stack direction={"row"} className={"w-11/12 h-[72px]"}>
          <Typography className={"text-5xl lg:text-4xl flex h-[72px]"}>
            From text and description to production website
          </Typography>
        </Stack>
      </Stack>
      <Steps />
      <MobileSteps />
      <Creation />
      <OrderNow />
    </React.Fragment>
  );
}

function Creation() {
  const [time1, setTime1] = useState(1);
  const [time2, setTime2] = useState(1);
  const [time3, setTime3] = useState(1);
  const handleChange1 = (event) => {
    setTime1(event.target.value);
  };
  const handleChange2 = (event) => {
    setTime2(event.target.value);
  };
  const handleChange3 = (event) => {
    setTime3(event.target.value);
  };
  return (
    <Box
      className={"flex w-full h-[1600px] lg:h-[480px]"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack
        direction={{ sm: "column", md: "row" }}
        className={"flex w-11/12"}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Card
          key={1}
          className={"w-[600px] h-[480px] lg:w-[340px] lg:h-[320px]"}
        >
          <CardContent>
            <Stack
              direction={"column"}
              spacing={2}
              className={"w-full flex"}
              alignItems={"center"}
            >
              <Typography
                align={"center"}
                className={
                  "h-[64px] text-5xl lg:h-[48px] lg:text-2xl text-center"
                }
                display={"flex"}
                color={"primary"}
              >
                What Do You Want:
              </Typography>
              <FormControl className={"w-11/12 h-[100px] lg:h-[56px]"}>
                <InputLabel id="framework" className={"flex"}>
                  <Typography className={"text-base"}>Framework</Typography>
                </InputLabel>
                <Select
                  labelId="framework"
                  id="framework"
                  value={time1}
                  label="framework"
                  onChange={handleChange1}
                >
                  <MenuItem value={1}>
                    <Typography className={"text-4xl lg:text-lg"}>
                      Next.js (React+TailwindCSS)
                    </Typography>
                  </MenuItem>
                  <MenuItem value={2}>
                    <Typography className={"text-4xl lg:text-lg"}>
                      React
                    </Typography>
                  </MenuItem>
                  <MenuItem value={3}>
                    <Typography className={"text-4xl lg:text-lg"}>
                      Pure html or others
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl className={"w-11/12 h-[100px] lg:h-[56px]"}>
                <InputLabel id="framework">Target</InputLabel>
                <Select
                  labelId="framework"
                  id="framework"
                  value={time2}
                  label="framework"
                  onChange={handleChange2}
                >
                  <MenuItem value={1}>
                    <Typography className={"text-4xl lg:text-lg"}>
                      Efficient
                    </Typography>
                  </MenuItem>
                  <MenuItem value={3}>
                    <Typography className={"text-4xl lg:text-lg"}>
                      Aesthetic
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl className={"w-11/12 h-[100px] lg:h-[56px]"}>
                <InputLabel id="framework">Components</InputLabel>
                <Select
                  labelId="framework"
                  id="framework"
                  value={time3}
                  label="framework"
                  onChange={handleChange3}
                >
                  <MenuItem value={0}>
                    <Typography className={"text-4xl lg:text-lg"}>
                      Pre-built library
                    </Typography>
                  </MenuItem>
                  <MenuItem value={0.5}>
                    <Typography className={"text-4xl lg:text-lg"}>
                      Provided
                    </Typography>
                  </MenuItem>
                  <MenuItem value={1}>
                    <Typography className={"text-4xl lg:text-lg"}>
                      None
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </CardContent>
        </Card>
        <Card
          key={2}
          className={"w-[600px] h-[480px] lg:w-[340px] lg:h-[320px]"}
        >
          <CardContent>
            <Stack
              direction={"column"}
              spacing={2}
              className={"w-full flex"}
              alignItems={"center"}
            >
              <Typography
                align={"center"}
                className={
                  "h-[64px] text-5xl lg:h-[48px] lg:text-2xl text-center"
                }
                display={"flex"}
                color={"primary"}
              >
                What Do I Need:
              </Typography>
              <Typography
                align={"left"}
                className={"h-[160px] text-3xl lg:h-[48px] lg:text-lg"}
                display={"flex"}
              >
                1. A description file about the content and usage of the
                website. <br />
                2. Some similar examples of design from competitors.(If
                possible) <br />
                3. Necessary images and other resources.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
        <Card
          key={2}
          className={"w-[600px] h-[480px] lg:w-[340px] lg:h-[320px]"}
        >
          <CardContent>
            <Stack
              direction={"column"}
              spacing={2}
              className={"w-full flex"}
              alignItems={"center"}
            >
              <Typography
                align={"center"}
                className={
                  "h-[64px] text-3xl lg:h-[48px] lg:text-2xl text-center"
                }
                display={"flex"}
                color={"primary"}
              >
                What Do You Get:
              </Typography>
              <Typography
                align={"center"}
                className={"h-[160px] text-3xl lg:h-[72px] lg:text-lg"}
                display={"flex"}
              >
                A well developed website prototype finished in:
              </Typography>
              <Typography
                align={"left"}
                className={"h-[64px] text-5xl lg:h-[48px] lg:text-4xl"}
                display={"flex"}
              >
                {time1 + time2 + time3} Weeks
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}

function Steps() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Collect Data",
      content:
        "Search for all the material and data for the web app, including similar design and users' requirement.",
      tools: "Google, face-to-face investigate etc.",
    },
    {
      title: "Build basic UI prototype",
      content:
        "Consider users' behavior when viewing the website and fit their modes. Then design for basic layout and interaction flows.",
      tools: "Figma, Illustrator, Photoshop",
    },
    {
      title: "Build website prototype",
      content:
        "Build fully interactive website with front-end techs. These can be upload to Github with version control for further development.",
      tools: "Next.js(React), Vue.js etc.",
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box
      className={"hidden lg:flex w-full h-[480px]"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        className={"flex w-11/12"}
      >
        <Stepper
          nonLinear
          activeStep={activeStep}
          className={"flex w-full"}
          alternativeLabel
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                <Typography className={"text-lg"}>{step.title}</Typography>
              </StepButton>
            </Step>
          ))}
        </Stepper>

        <Stack
          direction={"row"}
          className={"w-full h-[240px] flex"}
          alignItems={"center"}
        >
          <IconButton
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            className={"w-[64px] text-4xl"}
          >
            <ArrowBackIosNewIcon fontSize={"inherit"} />
          </IconButton>
          <Stack direction={"column"} alignItems={"center"} className={"flex"}>
            <Typography className={"flex text-2xl h-[96px] text-center"}>
              {steps[activeStep].content}
            </Typography>
            <Typography className={"flex text-3xl"} color={"primary"}>
              Tools: {steps[activeStep].tools}
            </Typography>
          </Stack>
          <IconButton
            color="inherit"
            disabled={activeStep === 2}
            onClick={handleNext}
            className={"w-[64px] text-4xl"}
          >
            <ArrowForwardIos fontSize={"inherit"} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

function MobileSteps() {
  const steps = [
    {
      title: "Collect Data",
      content:
        "Search for all the material and data for the web app, including similar design and users' requirement.",
      tools: "Google, face-to-face investigate etc.",
    },
    {
      title: "Build basic UI prototype",
      content:
        "Consider users' behavior when viewing the website and fit their modes. Then design for basic layout and interaction flows.",
      tools: "Figma, Illustrator, Photoshop",
    },
    {
      title: "Build website prototype",
      content:
        "Build fully interactive website with front-end techs. These can be upload to Github with version control for further development.",
      tools: "Next.js(React), Vue.js etc.",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      className={"flex lg:hidden w-full h-[720px]"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className={"flex w-11/12"}
      >
        {steps.map((step, index) => (
          <Step key={step.title}>
            <StepLabel>
              <Typography className={"text-5xl"}>{step.title}</Typography>
            </StepLabel>

            <StepContent>
              <Stack direction={"column"} spacing={2}>
                <Typography className={"text-3xl"}>{step.content}</Typography>
                <Typography className={"text-3xl"} color={"primary"}>
                  {step.tools}
                </Typography>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={index === 2}
                    className={"w-[320px] h-[120px] normal-case text-3xl"}
                  >
                    Next
                  </Button>
                  <Button
                    disabled={index === 0}
                    variant="outlined"
                    onClick={handleBack}
                    className={"w-[320px] h-[120px] normal-case text-3xl"}
                  >
                    Back
                  </Button>
                </Stack>
              </Stack>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

function OrderNow() {
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      className={"w-full  h-[320px]  lg:h-[128px] flex"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={4}
    >
      <Typography className={"text-3xl lg:text-lg flex"} align={"center"}>
        Want to make yourself/company a website?
      </Typography>
      <Button
        variant={"contained"}
        className={
          "w-[560px] h-[120px] lg:w-[200px] lg:h-[56px] text-4xl lg:text-base normal-case"
        }
      >
        Contact me now!
      </Button>
    </Stack>
  );
}
