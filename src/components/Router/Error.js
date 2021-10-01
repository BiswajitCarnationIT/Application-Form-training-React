import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <NavLink to="/">Go back</NavLink>
    </div>
  );
};

export default Error;
