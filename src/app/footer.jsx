"use client";
import * as React from "react";
import Image from "next/image";
import { Box, Link, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <React.Fragment>
      <Divider></Divider>
      <Stack
        className={"m-h-[56px] w-full flex"}
        alignItems={"center"}
        direction={"row"}
        justifyContent={"start"}
      >
        <Box className={"w-[16px]"}></Box>
        <Box className={"w-[128px] h-[128px] lg:w-[48px] lg:h-[32px] relative"}>
          <Image src={"/Logo.svg"} fill alt="logo"></Image>
        </Box>
        <Box alignItems={"center"} className={"hidden lg:flex"}>
          <Typography color={"primary"} className={"text-6xl lg:text-base"}>
            Design-Hu
          </Typography>
        </Box>
        <Box className={"flex grow"}></Box>
        <Stack
          alignItems={"center"}
          className={"flex"}
          justifyContent={"end"}
          direction={"row"}
        >
          <Typography className={"flex  text-3xl lg:text-sm text-center"}>
            This site is build on Next.js and deployed on Vercel using MUI’s
            material UI components.
          </Typography>
          <Box className={"w-[8px]"}></Box>
          <Link
            className={"w-[36px] cursor-pointer text-sm hidden lg:flex"}
            onClick={() => {
              router.push("https://mui.com/material-ui/");
            }}
          >
            MUI
          </Link>
          <Link
            className={"w-[48px] cursor-pointer text-sm hidden lg:flex"}
            onClick={() => {
              router.push("https://vercel.com/shengyuan-hus-projects");
            }}
          >
            Vercel
          </Link>
          <Link
            className={"w-[80px] cursor-pointer text-sm hidden lg:flex"}
            onClick={() => {
              router.push("./contact");
            }}
            align={"right"}
          >
            Contact me
          </Link>
        </Stack>
        <Box className={"w-[16px]"}></Box>
      </Stack>
    </React.Fragment>
  );
}
