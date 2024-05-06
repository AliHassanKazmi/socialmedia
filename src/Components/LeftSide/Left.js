import React, { useState } from "react";
import "../LeftSide/Left.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { RiFileListLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Profile from "../../assets/profile.jpg";

const Left = ({ profileImg, modelDetails }) => {
  const [btnActive, setBtnActive] = useState("#");
  const [logOutExit, setLogOutExit] = useState(false);

  return (
    <div className="L-features">
      <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
        <div
          onClick={() => setBtnActive("#")}
          id="L-box"
          className={btnActive === "#" ? "active" : ""}
        >
          <AiOutlineHome className="margin" />
          <span>Home Page</span>
        </div>
      </Link>

      <div className="left-user">
        <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
          <div className="user-name-userid">
            <img src={profileImg ? profileImg : Profile} alt="" />
            <div className="L-user">
              <h1>{modelDetails ? modelDetails.ModelName : "Ali Hassan"}</h1>
              <span>
                {modelDetails ? modelDetails.ModelUserName : "@ali78"}
              </span>
            </div>
          </div>
        </Link>
        <MoreHorizIcon
          onClick={() => setLogOutExit(!logOutExit)}
          className="vert"
        />

        {logOutExit && (
          <div className="logOutExitContainer">
            <button>Add an existing account</button>
            <Link to="/" style={{ width: "100%" }}>
              <button>Log out @vijay98</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Left;
