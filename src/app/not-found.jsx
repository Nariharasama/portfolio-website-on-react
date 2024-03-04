import { Box, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function notFound() {
  return (
    <Box
      className={"h-[1440px]  lg:h-[640px]"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
    >
      <Stack
        display={"flex"}
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        divider={<Divider orientation={"vertical"} flexItem />}
        className={"h-1/4"}
      >
        <Typography className={"text-7xl   lg:text-4xl"} color={"primary"}>
          Error 404
        </Typography>
        <Typography className={"text-5xl  lg:text-2xl"}>
          Page not found
        </Typography>
      </Stack>
    </Box>
  );
}
