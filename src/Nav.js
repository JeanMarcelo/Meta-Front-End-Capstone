import React from "react";
import logo from "./images/Logo .svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className={"navbar"}>
          <div className={"imagem"}>
            <Link to="/">
              <img src={logo} alt="Little Lemon logo" />
            </Link>
          </div>
          <div>
            <Link className={"navbar1"} to="/">
              Home
            </Link>
            <Link className={"navbar1"} to="/About">
              About
            </Link>
            <Link className={"navbar1"} to="/booking">
              Reservation
            </Link>
            <Link className={"navbar1"} to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
