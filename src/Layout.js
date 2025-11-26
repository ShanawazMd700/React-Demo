// Layout.js
import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./toggle.css";

export default function Layout({ children }) {
  return (
    <div>
      {children}

      {/* Theme toggle always visible */}
      <ThemeToggle />
    </div>
  );
}
