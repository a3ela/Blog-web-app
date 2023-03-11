import React from "react";
import "./write.css";
import { AiFillCamera } from "react-icons/ai";
import profile from "../../assets/profile.jpg";
const Write = () => {
  return (
    <div className="write-section">
      <img src={profile} alt="" className="write-img" />
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="fileInput">
            <AiFillCamera />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write-title"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            className="write-desc"
            placeholder="Tell your story..."
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className="submit-btn">Publish</button>
      </form>
    </div>
  );
};

export default Write;
