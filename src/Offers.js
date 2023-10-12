import React from "react";
import greek from "./images/greek salad.jpg";
import desert from "./images/desert.jpg";
import Pancake from "./images/pancakes.jpg";

const Offers = () => {
  const logIn = () => {
    alert("Please, log-In to access our offers and make orders");
  };

  return (
    <>
      <div className="maintext">
        <h1>Check Our Special Offers This Week</h1>
      </div>
      <div className={"container"} onClick={logIn}>
        <div className={"item1"}>
          <img src={greek} alt="Greek Salad" width="310px" height="250px" />
          <h2>Greek Salad</h2>
          <h3>$12.00</h3>
        </div>
        <div className={"item1"}>
          <img src={desert} alt="desert" width="310px" height="250px" />
          <h2>Lemon desert</h2>
          <h3>$10.00</h3>
        </div>
        <div className={"item1"}>
          <img src={Pancake} alt="Pancake" width="310px" height="250px" />
          <h2>Berry Pancake</h2>
          <h3>$10.00</h3>
        </div>
      </div>
    </>
  );
};

export default Offers;
