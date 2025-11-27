import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
  return (
    <>
      {children}

      {/* FLOATING THEME BUTTON ON ALL PAGES */}
      <div className="theme-toggle-fixed">
        <ThemeToggle />
      </div>
    </>
  );
}
