"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { Space_Grotesk } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const SpaceGrotest = Space_Grotesk({
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: SpaceGrotest.style.fontFamily,
  },
});

export default theme;
