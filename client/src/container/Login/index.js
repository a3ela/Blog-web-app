import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form">
        <label>Email</label>
        <input
          type="text"
          className="login-input"
          placeholder="Enter your Email"
        />
        <label>Password</label>
        <input
          type="password"
          className="login-input"
          placeholder="enter password"
        />
        <button className="login-btn">Login</button>
      </form>
      <button className="register-btn">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;
