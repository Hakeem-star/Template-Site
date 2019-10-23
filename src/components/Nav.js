import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: ""
    };
  }

  componentDidMount(prevProps, prevState, snapshot) {
    // if (prevState.prevScroll !== this.state.prevScroll) {

    // window.clearTimeout(timeOut);
    this.scroll();
    // }
  }
  scroll() {
    let that = this;
    document.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        that.setState({ i: "scroll" });
      } else {
        that.setState({ i: "" });
      }
    });
  }
  render() {
    return (
      <nav id="pageNavigation" className={this.state.i}>
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
  }
}

export default Nav;
