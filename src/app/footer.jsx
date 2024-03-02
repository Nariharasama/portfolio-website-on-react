"use client";
import * as React from "react";
import Image from "next/image";
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
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
        <Grid item alignItems={"center"} display={"flex"}>
          <Typography variant={"h6"}>Design-Hu.net</Typography>
        </Grid>
        <Grid xs display={"flex"}></Grid>
        <Grid
          item
          alignItems={"center"}
          display={"flex"}
          justifyContent={"right"}
          xs={9}
        >
          <Typography variant={"body2"} className={"w-[640px]"}>
            This site is build on Next.js and deployed on Vercel using MUI’s
            material UI components.
          </Typography>
          <Link
            className={"w-[48px] cursor-pointer"}
            onClick={() => {
              router.push("https://mui.com/material-ui/");
            }}
          >
            MUI
          </Link>
          <Link
            className={"w-[40px] cursor-pointer"}
            onClick={() => {
              router.push("https://vercel.com/shengyuan-hus-projects");
            }}
          >
            Vercel
          </Link>
          <Link
            className={"w-[140px] cursor-pointer"}
            onClick={() => {
              router.push("./contact");
            }}
            align={"right"}
          >
            Contact With me
          </Link>
        </Grid>
        <Grid item className={"w-[16px]"}></Grid>
      </Grid>
    </React.Fragment>
  );
}
