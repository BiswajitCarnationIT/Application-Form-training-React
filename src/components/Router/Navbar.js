import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <a href="/">About us </a>
      <a href="/contact">Contact us</a>
      <br></br>

      <NavLink exact activeClassName="active_Class" to="/">
        <button>About us</button>
      </NavLink>
      <NavLink exact activeClassName="active_Class" to="/service">
        <button>Service</button>
      </NavLink>
      <NavLink exact activeClassName="active_Class" to="/search">
        <button>Search</button>
      </NavLink>
      <NavLink exact activeClassName="active_Class" to="/user">
        <button>User</button>
      </NavLink>
      <button>
        <NavLink exact activeClassName="active_Class" to="/contact">
          Contact us
        </NavLink>
      </button>
    </>
  );
};

export default Navbar;
