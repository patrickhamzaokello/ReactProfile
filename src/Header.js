import React from "react";
import "./Header.css";
import logo from "./logo.svg";

import Instagrm from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import Github from "@material-ui/icons/GitHub";
import Facebook from "@material-ui/icons/Facebook";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} width="34" alt="logo" />
      </div>

      <div className="social">
        <a  href="https://github.com/patrickhamzaokello" target="_blank">
          <Github className="socialmediaicon" />
        </a>
        <a href="https://www.instagram.com/patrick_hamza_okello/?hl=en" target="_blank">
          <Instagrm className="socialmediaicon" />
        </a>
        <a href="https://twitter.com/patrick_hamza" target="_blank">
          <Twitter className="socialmediaicon" />
        </a>{" "}
        <a href="https://www.facebook.com/PatrickHamzaOkello" target="_blank">
          <Facebook className="socialmediaicon" />
        </a>
      </div>
    </div>
  );
}

export default Header;
