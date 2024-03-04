"use client";
import * as React from "react";
import Image from "next/image";
import { Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <React.Fragment>
      <Divider></Divider>
      <Grid
        container
        spacing={1}
        className={"h-[72px] w-full"}
        alignItems={"center"}
        display={"flex"}
      >
        <Grid item className={"w-[16px]"}></Grid>
        <Grid item alignItems={"center"} display={"flex"}>
          <Image src={"/Logo.svg"} alt="logo" width={40} height={40}></Image>
        </Grid>
        <Grid item alignItems={"center"} className={"hidden lg:flex"}>
          <Typography variant={"h6"}>Design-Hu</Typography>
        </Grid>
        <Grid xs display={"flex"}></Grid>
        <Grid
          item
          alignItems={"center"}
          display={"flex"}
          justifyContent={"right"}
        >
          <Typography className={"flex text-xs"}>
            This site is build on Next.js and deployed on Vercel using MUI’s
            material UI components.
          </Typography>
          <Grid item className={"w-[8px]"}></Grid>
          <Link
            className={"w-[36px] cursor-pointer text-sm hidden lg:flex"}
            onClick={() => {
              router.push("https://mui.com/material-ui/");
            }}
          >
            MUI
          </Link>
          <Link
            className={"w-[36px] cursor-pointer text-sm hidden lg:flex"}
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
        </Grid>
        <Grid item className={"w-[16px]"}></Grid>
      </Grid>
    </React.Fragment>
  );
}
