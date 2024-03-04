"use client";
import * as React from "react";
import Image from "next/image";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import TranslateIcon from "@mui/icons-material/Translate";
import WorkIcon from "@mui/icons-material/Work";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <React.Fragment>
      <div>
        <Grid
          container
          className={"h-[72px] w-full"}
          alignItems={"center"}
          display={"flex"}
        >
          <Grid item>
            <Grid container>
              <Grid item className={"w-[16px]"}></Grid>
              <Grid item alignItems={"center"} display={"flex"}>
                <Image
                  src={"/Logo.svg"}
                  alt="logo"
                  width={40}
                  height={40}
                ></Image>
              </Grid>
              <Grid item alignItems={"center"} display={"flex"}>
                <Typography
                  color={"primary"}
                  className={"text-3xl lg:text-base"}
                >
                  Design-Hu
                </Typography>
              </Grid>
              <Grid item className={"w-[24px]"}></Grid>
              <Grid item alignItems={"center"} display={"flex"}>
                <Button
                  variant={"text"}
                  className={
                    "normal-case  w-[120px] lg:w-[54px] text-2xl lg:text-base"
                  }
                  disableRipple
                  color={"primary"}
                >
                  Home
                </Button>
                <Button
                  variant={"text"}
                  className={
                    "normal-case w-[120px]  lg:w-[54px] text-2xl lg:text-base"
                  }
                  disableRipple
                >
                  Work
                </Button>
                <Button
                  variant={"text"}
                  className={
                    "normal-case w-[120px] lg:w-[54px] text-2xl lg:text-base"
                  }
                  disableRipple
                >
                  Docs
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs display={"flex"}></Grid>
          <Grid
            item
            alignItems={"center"}
            className={"flex"}
            justifyContent={"right"}
          >
            <Box
              className={
                "hidden lg:flex rounded outline outline-1 h-[32px] outline-[#2196F3]"
              }
              display={"flex"}
              alignItems={"center"}
            >
              <Box className={"w-[6px]"}></Box>
              <Typography
                className={"text-xs"}
                color={"primary"}
                align={"center"}
              >
                Recently searching for job as a designer or front-end developer.
              </Typography>
              <Box className={"w-[6px]"}></Box>
            </Box>
            <Box className={"w-[4px]"}></Box>
            <Box
              className={"w-[40px]"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <IconButton
                aria-label="github"
                color={"primary"}
                className={
                  "rounded outline outline-1 h-[32px] w-[32px] outline-[#2196F3]"
                }
                onClick={() => {
                  router.push("https://github.com/Nariharasama");
                }}
              >
                <GitHubIcon className={"h-[20px]"} />
              </IconButton>
            </Box>
            <Box
              className={"w-[40px]"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <IconButton
                aria-label="github"
                color={"primary"}
                className={
                  "rounded outline outline-1 h-[32px] w-[32px] outline-[#2196F3]"
                }
              >
                <TranslateIcon className={"h-[20px]"} />
              </IconButton>
            </Box>
            <Box
              className={"w-[40px]"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <IconButton
                aria-label="github"
                color={"primary"}
                className={
                  "rounded outline outline-1 h-[32px] w-[32px] outline-[#2196F3]"
                }
              >
                <WorkIcon className={"h-[20px]"} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item className={"w-[4px]"}></Grid>
        </Grid>
      </div>
      <Divider />
    </React.Fragment>
  );
}
