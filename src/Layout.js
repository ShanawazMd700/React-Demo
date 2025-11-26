import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./toggle.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      {children}

      {/* Fixed theme toggle button */}
      <div className="theme-toggle-fixed">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Layout;
