import React from "react";
import { useDarkMode, DarkModeProvider } from "./DarkModeContext";
import { lightTheme, darkTheme } from "./theme";
import MainLayout from "./MainLayout";

const MyApp = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <MainLayout
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      theme={theme}
    />
  );
};

const App = () => {
  return (
    <DarkModeProvider>
      <MyApp />
    </DarkModeProvider>
  );
};

export default App;
