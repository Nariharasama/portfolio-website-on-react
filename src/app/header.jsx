"use client";
import * as React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import TranslateIcon from "@mui/icons-material/Translate";
import WorkIcon from "@mui/icons-material/Work";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function MenuBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box>
        <IconButton aria-label="menu">
          <MenuIcon onClick={handleClick} className={"text-8xl"}></MenuIcon>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={handleClose}
            className={
              "text-7xl h-[120px] w-[640px] align-middle justify-center"
            }
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className={"text-7xl h-[144px] align-middle justify-center"}
          >
            Work
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className={"text-7xl h-[144px] align-middle justify-center"}
          >
            Docs
          </MenuItem>
          <Divider />
          <Stack
            display={"flex"}
            direction="row"
            spacing={6}
            className={"h-[144px] align-middle justify-center"}
          >
            <IconButton aria-label="github" color={"primary"}>
              <GitHubIcon className={"text-6xl"} />
            </IconButton>
            <IconButton aria-label="language" color={"primary"}>
              <TranslateIcon className={"text-6xl"} />
            </IconButton>
            <IconButton aria-label="job" color={"primary"}>
              <WorkIcon className={"text-6xl"} />
            </IconButton>
          </Stack>
        </Menu>
      </Box>
    </React.Fragment>
  );
}

export default function Header() {
  const router = useRouter();
  return (
    <React.Fragment>
      <div>
        <Grid
          container
          className={"flex w-full min-h-[72px]"}
          alignItems={"center"}
        >
          <Grid item>
            <Grid container>
              <Grid item className={"w-[16px]"}></Grid>
              <Grid
                item
                alignItems={"center"}
                display={"flex"}
                className={
                  "relative w-[128px] h-[128px] lg:w-[32px] lg:h-[32px]"
                }
              >
                <Image src={"/Logo.svg"} fill alt="logo"></Image>
              </Grid>
              <Grid item alignItems={"center"} display={"flex"}>
                <Typography
                  color={"primary"}
                  className={"text-6xl lg:text-base"}
                >
                  Design-Hu
                </Typography>
              </Grid>
              <Grid item className={"w-[24px]"}></Grid>
              <Grid item alignItems={"center"} className={"hidden lg:flex"}>
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
            className={"flex lg:hidden"}
            justifyContent={"right"}
          >
            <MenuBar></MenuBar>
          </Grid>
          <Grid
            item
            alignItems={"center"}
            className={"hidden lg:flex"}
            justifyContent={"right"}
          >
            <Box
              className={
                "flex rounded outline outline-1 h-[32px] outline-[#2196F3]"
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
