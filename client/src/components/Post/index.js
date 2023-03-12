import React from "react";
import profile from "../../assets/profile.jpg";
//style
import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img src={profile} alt="" className="post-img" />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eum illo
        alias nulla harum cupiditate nemo repudiandae quo quas, dolorem
        laboriosam eveniet, ipsum impedit similique voluptatum ea molestiae a
        libero?
      </p>
    </div>
  );
};

export default Post;
