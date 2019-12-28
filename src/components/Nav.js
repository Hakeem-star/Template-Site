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
      shrink: ""
    };
    this.setState.bind(this);
  }

  componentDidMount(prevProps, prevState, snapshot) {
    // if (prevState.prevScroll !== this.state.prevScroll) {
    // window.clearTimeout(timeOut);
    this.scroll();
    document.getElementById("pageNavigation").style.flexDirection = "column";
    console.log(this.props.history.location.pathname);
    // this.props.history.listen(location => {
    //   this.pageCheck(location);
    // });
    // }
  }
  // pageCheck(location) {
  //   if (location.pathname !== "/adefe_hq/overview") {
  //     this.setState({ shrink: "shrink" });
  //     console.log("shrink");
  //   } else {
  //     this.setState({ shrink: "" });
  //   }
  // }

  //Change the flex direction after a 5th of a second
  pageNavDirection(direction) {
    setTimeout(() => {
      document.getElementById("pageNavigation").style.flexDirection = direction;
    }, 200);
  }

  scroll() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        this.setState({ shrink: "shrink" });
        this.pageNavDirection("row");
      } else {
        this.setState({ shrink: "" });
        this.pageNavDirection("column");
      }
    });
  }

  overviewCLass() {
    //Keeps the nav button black during the splash page
    if (this.props.history.location.pathname === "/adefe_hq/") {
      return "nActive";
    }
  }
  render() {
    return (
      <nav id="pageNavigation" className={this.state.shrink}>
        <div>
          <NavLink activeClassName="nActive" to="/adefe_hq/overview">
            <span className={`nav ${this.overviewCLass()}`}>Overview .</span>
          </NavLink>
          <NavLink activeClassName="nActive" to="/adefe_hq/we_want">
            <span className="nav">We Want</span>
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="nActive" to="/adefe_hq/our_approach">
            <span className="nav">Our Approach .</span>
          </NavLink>
          <NavLink activeClassName="nActive" to="/adefe_hq/selected_projects">
            <span className="nav">Selected Projects</span>
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="nActive" to="/adefe_hq/about">
            <span className="nav">About .</span>
          </NavLink>
          <NavLink activeClassName="nActive" to="/adefe_hq/contact">
            <span className="nav">Contact</span>
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
