import React from "react";
//style
import "./sidebar.css";
import profile from "../../assets/profile.jpg";
const Sidebar = () => {
  return (
    <div className="sidebar-section">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img src={profile} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta
          voluptates veritatis necessitatibus, rerum quo dolorem, cum sint,
          dolores a pariatur.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATAGORIES</span>
        <ul className="sidebar-list">
          <li className="list-item">Life</li>
          <li className="list-item">Music</li>
          <li className="list-item">Style</li>
          <li className="list-item">Sport</li>
          <li className="list-item">Tech</li>
          <li className="list-item">Cinema</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
