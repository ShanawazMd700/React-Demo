import React, { useState } from "react";
import "./styling.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const adminUser = "admin";
    const adminPass = "12345";

    if (username === adminUser && password === adminPass) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("🤬Invalid credentials!");
    }
  }

  return (
    <div className="logincontainer">
      <div className="loginbox">
        <div className="loginleft">
          <h2>Login</h2>
          <p className="subtitle">Sign in to your account</p>

          <div className="inputgroup">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="loginbtn" onClick={handleLogin}>
              Login
            </button>
          </div>

          <p className="forgot">Forgot password?</p>
        </div>

        <div className="loginright">
          <h1>Password Generator</h1>
          <h2>Version1.0</h2>
          <p>
            This page will provide new passwords and other solutions for your accounts which
            makes your web surfing safe and secure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
