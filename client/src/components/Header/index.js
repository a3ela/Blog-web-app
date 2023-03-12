import React from "react";
//image
import profile from "../../assets/profile.jpg";
//style
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <span className="title-sm">react and node</span>
        <span className="title-lg">Blog</span>
      </div>
      <img src={profile} alt="" className="header-img" />
    </div>
  );
};

export default Header;
