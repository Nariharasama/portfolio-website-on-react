"use client";
import { createTheme } from "@mui/material/styles";
import { Space_Grotesk } from "next/font/google";

const SpaceGrotest = Space_Grotesk({
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: SpaceGrotest.style.fontFamily,
  },
});

export default theme;
