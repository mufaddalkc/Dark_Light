// ThemeSwitcher.js
import { useContext } from "react";
import { useSwitch } from "@mui/material/SwitchUnstyled";
import { ThemeContext } from "./themeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { getInputProps, checked, disabled, focusVisible } = useSwitch({
    defaultChecked: theme === "light",
  });

  const handleThemeChange = () => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div>
      <Tooltip title={theme === "light" ? "Dark Mode" : "Light Mode"}>
        <Switch
          {...getInputProps()}
          checked={checked}
          disabled={disabled}
          focusVisible={focusVisible}
          onChange={handleThemeChange}
        />
      </Tooltip>
    </div>
  );
};

export default ThemeSwitcher;
