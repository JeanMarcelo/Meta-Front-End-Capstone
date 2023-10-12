import React from "react";
import Nav from "./Nav";

const About = () => {
  return (
    <div>
      <Nav />
      <div className={"about"}>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>
    </div>
  );
};

export default About;
