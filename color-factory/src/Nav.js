import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <h1>Welcome to the color factory</h1>
      <ColorForm />
    </div>
  );
};

export default Nav;
