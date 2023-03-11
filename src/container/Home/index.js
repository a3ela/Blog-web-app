import React from "react";
//components
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Post from "../../components/Posts";
//style
import "./home.css";
function Home() {
  return (
    <div>
      <Header />
      <div className="main">
        <Post />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
