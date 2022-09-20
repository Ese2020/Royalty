import React from "react";
import { NavLink } from "../../atom";
import "./app.css";

export const Login = () => {
  return (
    <>
      <div className="lg-fm">
        <form action="/#">
          <h1 className="lg-h1">Login</h1>
          <p className="lg-p">
            Your details are kept safe and with it you can always gain access!
          </p>
          <input type="text" placeholder="email" />
          <br />
          <input type="password" placeholder="password" />
          <br />
          <button className="btn-lg-md">Login</button>
          <NavLink to="/signup" className="backed-2">
            <button className="btn-md">Not Registered? Sign Up</button>
          </NavLink>

          <NavLink to="/" className="backed-2 bw-2">
            <button className="btn-m-d">Continue Browing...</button>
          </NavLink>
          <button className="lg-btn">Change password</button>
        </form>
      </div>
    </>
  );
};
