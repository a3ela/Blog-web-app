import React from "react";
import Sidebar from "../../components/Sidebar";
import Singlepost from "../../components/Singlepost";
import "./single.css";
const Single = () => {
  return (
    <div className="single-section">
      <Singlepost />
      <Sidebar />
    </div>
  );
};

export default Single;
