import React from "react";
import "./settings.css";
import Sidebar from "../../components/Sidebar";
import profile from "../../assets/profile.jpg";
import { RiAccountCircleLine } from "react-icons/ri";
const Settings = () => {
  return (
    <div className="settings">
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="setting-update">Update your Account</span>
          <span className="setting-delete">Delete Account</span>
        </div>
        <form className="setting-form">
          <label>Profile</label>
          <div className="setting-img">
            <img src={profile} alt="" />
            <label htmlFor="fileInput">
              <RiAccountCircleLine />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="your name" />
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="setting-btn">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
