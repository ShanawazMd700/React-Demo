import React from "react";
import "./styling.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h1>Welcome to Dashboard</h1>
        <p>You successfully logged in!</p>

        <button className="logoutbtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
