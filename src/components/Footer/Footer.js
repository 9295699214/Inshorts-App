import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/aakash-chopra-125700118" rel="noreferrer" target="__blank">
          Aakash Chopra
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.linkedin.com/in/aakash-chopra-125700118" rel="noreferrer" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/9295699214" rel="noreferrer"  target="__blank">
        <i className="fab fa-github fa-2x"></i>
        </a> 
      </div>
    </div>
  );
};

export default Footer;
