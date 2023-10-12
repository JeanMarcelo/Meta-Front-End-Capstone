import React from "react";
import smallogo from "./images/Logo .svg";

const Footer = () => {
  return (
    <div>
      <div className={"footer"}>
        <div>
          <img src={smallogo} alt="logo" width="110px" />
        </div>
        <div>
          <p>
            &copy; {new Date().getFullYear()} Little Lemon - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
