import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const themes = {
  dark: {
    backgroundColor: "#222",
    color: "#eee",
    padding: "1rem",
  },
  light: {
    backgroundColor: "#fff",
    color: "#111",
    padding: "1rem",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
