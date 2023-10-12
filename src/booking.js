import React, { useState } from "react";
import Nav from "./Nav";

const Booking = () => {
  const [formData, setFormData] = useState({ data: "" });
  const [formTime, setFormTime] = useState({ time: "" });
  const [formGuests, setFormGuests] = useState({ guests: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormTime({ ...formTime, [name]: value });
    setFormGuests({ ...formGuests, [name]: value });
  };

  var data = formData.data;
  var time = formTime.time;
  var guests = formGuests.guests;

  const [mainComponent, setMainComponent] = useState(true);
  const [confirm, setConfirm] = useState(false);

  const altern = () => {
    setMainComponent(!mainComponent);
    setConfirm(!confirm);
  };

  const showConfirm = () => {
    return (
      <>
        <Nav />
        <div className={"confirmation"}>
          <h1>Thank you so much</h1>
          <h3>Your reservation is done!</h3>
          <p> Date: {data} </p>
          <p> Time: {time} </p>
          <p> Guests: {guests} </p>
          <p>We have sent you an email with the informations.</p>
        </div>
      </>
    );
  };

  const showMain = () => {
    return (
      <>
        <Nav />
        <form onSubmit={altern} className={"form"}>
          <div>
            <label>Day </label>
            <input
              type="date"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Time </label>
            <input
              type="time"
              name="time"
              value={formTime.time}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Guests </label>
            <input
              type="number"
              name="guests"
              value={formGuests.guests}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  };

  return (
    <div>
      {mainComponent && showMain()}
      {confirm && showConfirm()}
    </div>
  );
};

export default Booking;
