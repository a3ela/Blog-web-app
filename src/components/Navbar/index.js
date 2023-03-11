import React from "react";
// style
import "./navbar.css";
//image
import profile from "../../assets/profile.jpg";
// icons
import { BsFacebook, BsTwitter, BsPinterest, BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="top">
      <div className="topleft">
        <BsFacebook />
        <BsTwitter />
        <BsPinterest />
      </div>
      <div className="topcenter">
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">About</li>
          <li className="list-item">Contact</li>
          <li className="list-item">Write</li>
          <li className="list-item">Logout</li>
        </ul>
      </div>
      <div className="topright">
        <img className="profile-img" src={profile} alt="img" />
        <BsSearch />
      </div>
    </div>
  );
};

export default Navbar;
