import React from "react";
import "./Content.css";
import Button from "@material-ui/core/Button";
import Profile from "./mkbhd2.png";
import Plant from "./plant.png";
import DownArrow from "@material-ui/icons/ArrowDownward";

import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import Whatsapp from "@material-ui/icons/WhatsApp";
import Github from "@material-ui/icons/GitHub";

function Content() {
  return (
    <div className="home">
      <div className="content">
        <div className="content__brown">
          <img src={Plant} />
        </div>
        <div className="content__white">
          <h1></h1>

          <h1 className="headingtext">
          Hey Friend, I’m Patrick. <span>Full Stack <span className="devcolor">Developer,</span></span> <span>Computer Science Student</span>
          </h1>
  

          <Button className="contactme__button">CONTACT ME</Button>
        </div>

        <div className="content__dark">
          <img src={Profile} />
        </div>
      </div>

      <div className="arrowdownward">
        <DownArrow className="arrow" />
      </div>
      <div className="homedescription">
        <h2>
          Current University Student enrolled in Computer Science, with 4 years
          of experience working on different projects on Robotics, Math and
          Statistics, Front end and Back end Web Development, Operating Systems
        </h2>

        <p>
          {" "}
          Creator of pkasemer.com , Passionate Computer Science Student, LOVES
          DATA
        </p>

        <div className="socialmedia">
          <Github className="socialicon" />
          <Whatsapp className="socialicon" />
          <Twitter className="socialicon" />
          <Instagram className="socialicon" />
          <Facebook className="socialicon" />
        </div>
      </div>
    </div>
  );
}

export default Content;
