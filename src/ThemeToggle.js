import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
        <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "light" ? (
        <FaMoon size={22} />
      ) : (
        <FaSun size={22} />
      )}
    </button>
  );
}
