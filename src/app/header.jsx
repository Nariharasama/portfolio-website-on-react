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
import { useRouter } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function MenuBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
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
            onClick={() => router.push("./")}
            className={
              "text-7xl h-[120px] w-[640px] align-middle justify-center"
            }
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => router.push("./work")}
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
              <MailOutlineIcon className={"text-6xl"} />
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
        <Stack
          className={"flex w-full min-h-[56px]"}
          alignItems={"center"}
          direction={"row"}
        >
          <Stack direction={"row"} className={"flex"} alignItems={"center"}>
            <Box className={"w-[16px]"}></Box>
            <Stack
              item
              alignItems={"center"}
              justifyContent={"start"}
              display={"flex"}
              className={"flex"}
            >
              <Box
                className={
                  "w-[128px] h-[128px] lg:w-[48px] lg:h-[32px] relative"
                }
              >
                <Image src={"/Logo.svg"} fill alt="logo"></Image>
              </Box>
            </Stack>
            <Typography color={"primary"} className={"text-6xl lg:text-base"}>
              Design-Hu
            </Typography>
            <Box item className={"w-[24px]"}></Box>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              className={"hidden lg:flex"}
              direction={"row"}
            >
              <Button
                variant={"text"}
                className={
                  "normal-case  w-[120px] lg:w-[54px] text-2xl lg:text-base"
                }
                disableRipple
                color={"primary"}
                onClick={() => router.push("./")}
              >
                Home
              </Button>
              <Button
                variant={"text"}
                className={
                  "normal-case w-[120px]  lg:w-[54px] text-2xl lg:text-base"
                }
                onClick={() => router.push("./work")}
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
            </Stack>
          </Stack>
          <Box className={"grow flex"}></Box>
          <Box
            alignItems={"center"}
            className={"flex lg:hidden"}
            justifyContent={"right"}
          >
            <MenuBar />
          </Box>
          <Stack
            alignItems={"center"}
            className={"hidden lg:flex"}
            justifyContent={"right"}
            direction={"row"}
          >
            <Box
              className={
                "flex rounded outline outline-1 h-[32px] outline-outline"
              }
              display={"flex"}
              alignItems={"center"}
            >
              <Box className={"w-[8px]"}></Box>
              <Typography
                className={"text-xs"}
                color={"primary"}
                align={"center"}
              >
                Searching for a design/develop part-time job. Contact me for
                more info.
              </Typography>
              <Box className={"w-[8px]"}></Box>
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
                  "rounded outline outline-1 h-[32px] w-[32px] outline-outline"
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
                  "rounded outline outline-1 h-[32px] w-[32px] outline-outline"
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
                  "rounded outline outline-1 h-[32px] w-[32px] outline-outline"
                }
              >
                <MailOutlineIcon className={"h-[20px]"} />
              </IconButton>
            </Box>
          </Stack>
          <Grid item className={"w-[4px]"}></Grid>
        </Stack>
      </div>
      <Divider />
    </React.Fragment>
  );
}
