import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
      <label>User Name</label>
        <input type="text" className="register-input" placeholder="Enter your Email" />
        <label>Email</label>
        <input type="text" className="register-input" placeholder="Enter your Email" />
        <label>Password</label>
        <input type="password" className="register-input" placeholder="enter password"/>
        <button className="login-btn">Login</button>
      </form>
      <button className="register-btn">Register</button>
    </div>
  );
};

export default Register;
