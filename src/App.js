import logo from './logo.svg';
import './styling.css';

function App() {
  return (
     <div className="logincontainer">
      <div className="loginbox">
        <div className="loginleft">
          <h2>Login</h2>
          <p className="subtitle">Sign in to your account</p>
          <div className="inputgroup">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="loginbtn">Login</button>
          </div>
          <p className="forgot">Forgot password?</p>
        </div>
        <div className="loginright">
          <h1>Password Generator</h1>
          <h2>Version1.0</h2>
          <p>
            This page will provide new passwords and other solutions for your accounts which
            makes your web surfing safe and secure
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
