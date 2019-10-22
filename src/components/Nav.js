import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const Nav = () => {
  return (
    <nav id="pageNavigation">
      <div>
        <NavLink activeClassName="nActive" exact to="/">
          <span className="nav">Overview .</span>
        </NavLink>
        <NavLink activeClassName="nActive" to="/we_want">
          <span className="nav">We Want</span>
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName="nActive" to="/our_approach">
          <span className="nav">Our Approach .</span>
        </NavLink>
        <NavLink activeClassName="nActive" to="/selected_projects">
          <span className="nav">Selected Projects</span>
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName="nActive" to="/about">
          <span className="nav">About .</span>
        </NavLink>
        <NavLink activeClassName="nActive" to="/contact">
          <span className="nav">Contact</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
