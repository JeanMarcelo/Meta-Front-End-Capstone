import React from "react";
import Banner from "./images/banner.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className={`header`}>
        <section>
          {/* Main header text */}
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Discover Little Lemon, where flavors come alive. Our menu is a
              culinary adventure, offering exquisite dishes in a cozy setting.
              Join us for a memorable dining experience.
            </p>
            <b>
              <Link to="/booking">Book a Table </Link>
            </b>
          </div>
        </section>
      </header>
      <section className={"Img"}>
        <img src={Banner} alt="banner" />
      </section>
    </div>
  );
};

export default Header;
