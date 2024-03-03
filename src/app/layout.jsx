import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledEngineProvider } from "@mui/material/styles";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.jsx";
import { CssBaseline } from "@mui/material";
import Header from "@/app/header";
import React from "react";
import Footer from "@/app/footer";

export const metadata = {
  title: "Design-Hu",
  description: "Home page of Hu Shengyuan",
};

export const viewport = {
  width: "1440",
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <React.StrictMode>
          <StyledEngineProvider injectFirst>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <CssBaseline />
              <ThemeProvider theme={theme}>
                <main>
                  <Header></Header>
                  {children}
                  <Footer></Footer>
                </main>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </StyledEngineProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}
