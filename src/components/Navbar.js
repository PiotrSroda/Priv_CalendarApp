import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui inverted menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/calendar" className="item">
        Calendar
      </Link>
    </div>
  );
};

export default Navbar;
