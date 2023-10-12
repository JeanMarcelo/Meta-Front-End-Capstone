import React from "react";
import Nav from "./Nav";
import { useState } from "react";

const Log = () => {
  const [formData, setFormData] = useState({ data: "" });
  const [formTime, setFormTime] = useState({ time: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormTime({ ...formTime, [name]: value });
  };

  const [mainComponent, setMainComponent] = useState(true);
  const [confirm, setConfirm] = useState(false);

  const altern = () => {
    setMainComponent(!mainComponent);
    setConfirm(!confirm);
  };

  const form = () => {
    return (
      <>
        <form onSubmit={altern} className={"form"}>
          <div>
            <label>Email </label>
            <input
              type="email"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password </label>
            <input
              type="password"
              name="time"
              value={formTime.time}
              onChange={handleChange}
              required
              minLength="4"
            />
          </div>
          <div>
            <button type="submit">LogIn</button>
          </div>
        </form>
      </>
    );
  };

  const submit = () => {
    return (
      <div className={"about"}>
        <div className={"login"}>
          <p>
            Thank you so much for visiting Little Lemon Website!
            <br />
            <br />
            We have sent an email to <b> {formData.data} </b> in oder to check
            your data.
            <br />
            <br />
            Open your email and confirm your data to continue the login.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Nav />
      <div>
        {mainComponent && form()}
        {confirm && submit()}
      </div>
    </div>
  );
};

export default Log;
