import React from "react";
import "./singlepost.css";
import profile from "../../assets/profile.jpg";
//icons
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
const Singlepost = () => {
  return (
    <div className="single-post">
      <div className="single-wrapper">
        <img src={profile} alt="" />
        <h1 className="single-post-title">
          Lorem ipsum dolor sit.
          <span className="single-post-edit">
            {" "}
            <BiEditAlt />
            <AiOutlineDelete />
          </span>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>abel</b>
          </span>
          <span className="single-post-date">1 hour ago</span>
        </div>
        <p className="single-post-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          nostrum aspernatur facere quisquam consequatur cum aliquid provident
          accusantium est corrupti dolorem eum praesentium quaerat, officia
          optio tempore, id quos esse? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolorem reiciendis magnam quod labore voluptates
          sint, quasi aspernatur excepturi voluptatum, eius asperiores incidunt
          odio amet, iste inventore nobis nostrum eaque earum?
        </p>
      </div>
    </div>
  );
};

export default Singlepost;
