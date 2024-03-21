"use client";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
function TitleText() {
  return (
    <Stack
      className={"w-full flex"}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box className={"h-[80px] w-full"} display={"flex"}></Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        className={"w-[640px] lg:w-[800px]"}
      >
        <Typography
          className={
            "w-full text-6xl  lg:text-5xl h-[160px] lg:h-[72px] text-center"
          }
        >
          Need a hand in your design team?
        </Typography>
      </Box>
      <Box
        className={"w-full"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          align={"center"}
          color={"primary"}
          className={" w-11/12 text-5xl  lg:text-3xl h-[220px] lg:h-[72px]"}
        >
          If you have any requirement I can help with, or any problem about this
          website,
        </Typography>
      </Box>
      <Box
        className={"w-full"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          align={"center"}
          className={"w-10/12  text-6xl  lg:text-4xl h-[200px]  lg:h-[72px]"}
        >
          Contact me via the following ways:
        </Typography>
      </Box>
    </Stack>
  );
}

function Education() {
  const EducationExperience = [
    {
      title: "Send me an email (Recommended)",
      info: "I will reply within 5 days.",
      data: "hushengyuan030831@gmail.com",
    },
    {
      title: "Call me via a available phone number",
      info: "Available time: 10:00am-11:30am",
      data: "(+81)070-3221-0831",
    },
    {
      title: "Face to face talk",
      info: "Please talk with me via email or phone beforehand.",
      data: "Living now: Xi’an,China",
    },
  ];
  return (
    <>
      <Box
        className={"w-full h-[100px] lg:h-[80px]"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      ></Box>
      <Stack
        className={"w-full h-[800px] lg:h-[280px]"}
        display={"flex"}
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        divider={<Divider orientation={"vertical"} flexItem />}
      >
        {EducationExperience.map((c, i) => (
          <Card
            key={i}
            className={"w-[480px] h-[320px] lg:w-[360px] lg:h-[200px] flex-col"}
          >
            <CardContent className={"flex-col h-full flex"}>
              <Typography
                align={"left"}
                className={"w-full h-[64px] text-2xl lg:text-base"}
                display={"flex"}
              >
                {c.title}
              </Typography>
              <Typography
                align={"left"}
                className={"w-full grow text-xl  lg:text-xs"}
                display={"flex"}
              >
                {c.info}
              </Typography>
              <Typography
                align={"left"}
                className={"w-full text-2xl  lg:text-sm"}
                display={"flex"}
                color={"primary"}
              >
                {c.data}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <Box
        className={"w-full h-[120px] lg:h-[80px]"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      ></Box>
    </>
  );
}

export default function Contact() {
  return (
    <div>
      <TitleText />
      <Education />
    </div>
  );
}
