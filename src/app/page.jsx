"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";

function TitleText() {
  const content = " Hi,I'm Hu Shengyuan";
  const [welcome, setWelcome] = useState("");
  const [isOver, setIsOver] = useState(0);
  let welcomeFull = welcome;
  useEffect(() => {
    if (isOver === 0) {
      const fullLen = content.length;
      if (welcome.length < fullLen) {
        setTimeout(() => {
          setWelcome(welcome.concat(content[welcome.length]));
        }, 200);
      } else {
        setIsOver(1);
      }
    } else {
      if (isOver === 1) {
        setTimeout(() => {
          setIsOver(2);
        }, 300);
      } else {
        setTimeout(() => {
          setIsOver(1);
        }, 300);
      }
    }
  });
  if (isOver !== 2) {
    welcomeFull = welcomeFull.concat("_");
  }
  return (
    <Box className={"w-full"}>
      <Box className={"h-[80px] w-full"} display={"flex"}></Box>
      <Box className={"w-full"} display={"flex"}>
        <Grid container className={"w-full"} display={"flex"}>
          <Grid item xs></Grid>
          <Grid
            item
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            className={"w-[640px] lg:w-[520px]"}
          >
            <Typography
              align={"left"}
              className={"w-full text-6xl  lg:text-5xl h-[104px] lg:h-[72px]"}
            >
              {welcomeFull}
            </Typography>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
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
          className={" w-11/12 text-5xl  lg:text-4xl h-[160px] lg:h-[56px]"}
        >
          UI designer as well as front-end developer.
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
          className={"w-10/12  text-3xl  lg:text-2xl h-[200px]  lg:h-[72px]"}
        >
          I'm working with Next.js (React) to build highly interactive web
          prototype.
          <br />
          Check my workflow that makes me possible to work both for design and
          build.
        </Typography>
      </Box>
    </Box>
  );
}

function NaviButton() {
  return (
    <Grid container spacing={2} className={"h-[320px] lg:h-[160px] w-full"}>
      <Grid
        item
        alignItems={"center"}
        display={"flex"}
        justifyContent={"right"}
        xs
      >
        <Button
          variant={"contained"}
          className={
            "normal-case w-[300px] h-[120px] lg:w-[160px] lg:h-[64px] text-3xl lg:text-lg"
          }
        >
          Workflow
        </Button>
      </Grid>
      <Grid
        item
        xs
        alignItems={"center"}
        display={"flex"}
        justifyContent={"left"}
      >
        <Button
          variant={"outlined"}
          className={
            "normal-case w-[300px] h-[120px] lg:w-[160px] lg:h-[64px] text-3xl lg:text-lg"
          }
        >
          Prototypes
        </Button>
      </Grid>
    </Grid>
  );
}

function Education() {
  const EducationExperience = [
    {
      school: "1.Young Gifted Project",
      info: "A project held by Xi'an Jiaotong University.Special courses for 2 years in college instead of 3 years in high school.",
      time: "Aug.2019-Jul.2020",
    },
    {
      school: "2.Xi’an Jiaotong University, China",
      info: "Top 10 University in China. Major: Industrial Design",
      time: "Aug.2020-Jul.2024",
    },
    {
      school: "3.Chiba University, Japan",
      info: "Exchange student in Top-D Project",
      time: "Apr.2022-Sep.2022",
    },
  ];
  return (
    <>
      <Box
        className={"w-full h-[240px] lg:h-[80px]"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          align={"center"}
          className={"text-5xl lg:text-xl"}
          display={"flex"}
          color={"primary"}
        >
          Education Experience
        </Typography>
      </Box>
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
            className={"w-[600px] h-[320px] lg:w-[360px] lg:h-[240px]"}
          >
            <CardContent>
              <Typography
                align={"left"}
                className={"w-full h-[64px] text-3xl lg:text-sm"}
                display={"flex"}
              >
                {c.school}
              </Typography>
              <Typography
                align={"left"}
                className={"w-full h-[120px] text-xl  lg:text-xs"}
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
                Aug.2019-Jul.2020
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <Box className={"h-[80px]"}></Box>
    </>
  );
}

export default function Home() {
  return (
    <div>
      <TitleText />
      <NaviButton />
      <Education />
    </div>
  );
}
