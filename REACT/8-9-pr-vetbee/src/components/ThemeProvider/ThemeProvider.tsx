import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SlideToggle } from "../SlideToggle/SlideToggle";

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
      <SlideToggle />
    </ThemeContext.Provider>
  );
};
