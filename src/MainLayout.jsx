import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import DarkModeToggle from "./DarkModeToggle";

const MainLayout = ({ darkMode, toggleDarkMode, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
