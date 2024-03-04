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
  breakpoints: {
    values: { xs: 0, sm: 720, md: 1024, lg: 1200, xl: 1440 },
  },
});

export default theme;
