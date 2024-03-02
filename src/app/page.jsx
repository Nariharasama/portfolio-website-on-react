"use client";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ArrowForward } from "@mui/icons-material";
import { useState, useEffect } from "react";

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
            className={"w-[520px]"}
          >
            <Typography
              variant={"h3"}
              align={"left"}
              className={"h-[72px] w-[520px]"}
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
          variant={"h4"}
          align={"center"}
          color={"primary"}
          className={"h-[56px]"}
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
        <Typography variant={"h5"} align={"center"}>
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
    <Grid container spacing={2} className={"h-[160px] w-full"}>
      <Grid
        item
        alignItems={"center"}
        display={"flex"}
        justifyContent={"right"}
        xs
      >
        <Button
          variant={"contained"}
          endIcon={<ArrowForward />}
          size={"large"}
          className={"normal-case w-[160px]"}
        >
          Workflow
        </Button>
      </Grid>
      <Grid xs={0.2} display={"flex"}></Grid>
      <Grid
        item
        xs
        alignItems={"center"}
        display={"flex"}
        justifyContent={"left"}
      >
        <Button
          variant={"outlined"}
          size={"large"}
          className={"normal-case w-[160px]"}
        >
          Prototypes
        </Button>
      </Grid>
    </Grid>
  );
}

function Education() {
  return (
    <>
      <Box className={"w-full h-[40px]"} display={"flex"}>
        <Grid
          container
          className={"w-full h-[40px]"}
          display={"flex"}
          spacing={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid xs display={"flex"}></Grid>
          <Grid
            item
            display={"flex"}
            xs={3.5}
            alignItems={"center"}
            justifyContent={"left"}
          >
            <Typography
              align={"left"}
              className={"w-[400px]"}
              variant={"h6"}
              display={"flex"}
              color={"primary"}
            >
              Education Experience
            </Typography>
          </Grid>
          <Grid
            item
            display={"flex"}
            xs={3.5}
            className={"w-[400px]"}
            alignItems={"center"}
            justifyContent={"center"}
          ></Grid>
          <Grid
            item
            display={"flex"}
            xs={3.5}
            className={"w-[400px]"}
            alignItems={"center"}
            justifyContent={"center"}
          ></Grid>
          <Grid xs display={"flex"}></Grid>
        </Grid>
      </Box>
      <Box className={"w-full h-[400px]"} display={"flex"}>
        <Grid
          container
          className={"w-full h-[360px]"}
          display={"flex"}
          spacing={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid xs display={"flex"}></Grid>
          <Grid
            item
            display={"flex"}
            xs={3.5}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Card className={"w-[400px] h-[320px]"}>
              <CardContent>
                <Typography
                  align={"left"}
                  className={"w-[400px]"}
                  variant={"subtitle2"}
                  display={"flex"}
                >
                  1.Xi’an Jiaotong University’s Young Gifted Project
                </Typography>
                <Box className={"w-full h-[56px]"}></Box>
                <Typography
                  align={"left"}
                  className={"w-[390px] h-[180px]"}
                  variant={"body2"}
                  display={"flex"}
                >
                  After graduated from middle school, I entered The Young gifted
                  Project by passing the test instead of going to high schools.
                  I got more time for my hobbies there: Programming. We attended
                  math modeling competitions and solved problem together.
                </Typography>
                <Typography
                  align={"left"}
                  className={"w-[390px]"}
                  variant={"h6"}
                  display={"flex"}
                  color={"primary"}
                >
                  Aug.2019-Jul.2020
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            display={"flex"}
            xs={3.5}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Card className={"w-[400px] h-[320px]"}>
              <CardContent>
                <Typography
                  align={"left"}
                  className={"w-[400px]"}
                  variant={"subtitle2"}
                  display={"flex"}
                >
                  2.Xi’an Jiaotong University, China (Undergraduate)
                </Typography>
                <Box className={"w-full h-[56px]"}></Box>
                <Typography
                  align={"left"}
                  className={"w-[390px] h-[180px]"}
                  variant={"body2"}
                  display={"flex"}
                >
                  I entered college after finishing Young Gifted Project’s
                  courses. I chose industrial design as my major and started
                  exploration of web design. I got to learn most of design tech
                  and front-end framework during this period.
                </Typography>
                <Typography
                  align={"left"}
                  className={"w-[390px]"}
                  variant={"h6"}
                  display={"flex"}
                  color={"primary"}
                >
                  Aug.2020-Jul.2024
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            display={"flex"}
            xs={3.5}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Card className={"w-[400px] h-[320px]"}>
              <CardContent>
                <Typography
                  align={"left"}
                  className={"w-[400px]"}
                  variant={"subtitle2"}
                  display={"flex"}
                >
                  3.Chiba University, Japan (Exchange student)
                </Typography>
                <Box className={"w-full h-[56px]"}></Box>
                <Typography
                  align={"left"}
                  className={"w-[390px] h-[180px]"}
                  variant={"body2"}
                  display={"flex"}
                >
                  I got the chance to study in Chiba University as an exchange
                  student. We joined many design projects, created all kinds of
                  prototypes from product, videos to website.
                </Typography>
                <Typography
                  align={"left"}
                  className={"w-[390px]"}
                  variant={"h6"}
                  display={"flex"}
                  color={"primary"}
                >
                  Apr.2022-Sep.2022
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs display={"flex"}></Grid>
        </Grid>
      </Box>
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
