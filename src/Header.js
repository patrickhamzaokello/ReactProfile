import React from "react";
import "./Header.css";

import Instagrm from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";

function Header() {
  return (
    <div className="header">
      <h1>Pkasemer</h1>

      {/* <div className="menu">
        <span>ABOUT</span>
        <span>PROJECT</span>
        <span>BLOG</span>
        <span>Contact</span>


        <div className="social__header">
          <Twitter  />
          <Instagrm />
        </div>
      </div> */}
    </div>
  );
}

export default Header;
