import React from "react";
import { Link } from "react-router-dom";
// style
import "./navbar.css";
//image
import profile from "../../assets/profile.jpg";
// icons
import { BsFacebook, BsTwitter, BsPinterest, BsSearch } from "react-icons/bs";

const Navbar = () => {
  const user = false;

  return (
    <div className="top">
      <div className="topleft">
        <BsFacebook />
        <BsTwitter />
        <BsPinterest />
      </div>
      <div className="topcenter">
        <ul className="list">
          <li className="list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-item">
            <Link>About</Link>
          </li>
          <li className="list-item">
            <Link>Contact</Link>
          </li>
          <li className="list-item">
            <Link to="/write">Write</Link>
          </li>
          {user && (
            <li className="list-item">
              <Link>Logout</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img className="profile-img" src={profile} alt="img" />
        ) : (
          <ul className="list">
            <li className="list-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="list-item">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}

        <BsSearch />
      </div>
    </div>
  );
};

export default Navbar;
