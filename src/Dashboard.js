import React, { useState } from "react";
import "./style1.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("generator");

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  }

  return (
    <div className="futuristic-dashboard">

      {/* HEADER */}
      <header className="fd-header">
        <h2 className="fd-logo">PASS GEN</h2>

        <nav className="fd-menu">
          <span className={activeTab === "generator" ? "active" : ""} onClick={() => setActiveTab("generator")}>Generator</span>
          <span className={activeTab === "saved" ? "active" : ""} onClick={() => setActiveTab("saved")}>Saved</span>
          <span className={activeTab === "strength" ? "active" : ""} onClick={() => setActiveTab("strength")}>Strength Check</span>
          <span className={activeTab === "history" ? "active" : ""} onClick={() => setActiveTab("history")}>History</span>
          <span className={activeTab === "settings" ? "active" : ""} onClick={() => setActiveTab("settings")}>Settings</span>
        </nav>
      </header>

      {/* HERO / CONTENT AREA */}
      <div className="fd-hero">

        {activeTab === "generator" && (
          <>
            <h1 className="fd-title">Password Generator</h1>
            <p className="fd-subtitle">Create secure, random passwords instantly.</p>
            <div className="btn-group">
              <button className="fd-reserve">Generate Password</button>
            </div>
          </>
        )}

        {activeTab === "saved" && (
          <>
            <h1 className="fd-title">Saved Passwords</h1>
            <p className="fd-subtitle">Access your locally saved passwords.</p>
            <div className="btn-group">
              <button className="fd-reserve">View Saved</button>
            </div>
          </>
        )}

        {activeTab === "strength" && (
          <>
            <h1 className="fd-title">Strength Checker</h1>
            <p className="fd-subtitle">Test how strong your password is.</p>
            <div className="btn-group">
              <button className="fd-reserve">Check Strength</button>
            </div>
          </>
        )}

        {activeTab === "history" && (
          <>
            <h1 className="fd-title">Password History</h1>
            <p className="fd-subtitle">See recently generated passwords.</p>
            <div className="btn-group">
              <button className="fd-reserve">View History</button>
            </div>
          </>
        )}

        {activeTab === "settings" && (
          <>
            <h1 className="fd-title">Settings</h1>
            <p className="fd-subtitle">Manage theme, storage, and security options.</p>
            <div className="btn-group">
              <button className="fd-reserve">Edit Settings</button>
            </div>
          </>
        )}

        {/* Single Logout Button FIXED */}
        <button className="logoutbtn main-logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
