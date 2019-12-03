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
  }

  componentDidMount(prevProps, prevState, snapshot) {
    // if (prevState.prevScroll !== this.state.prevScroll) {
    // window.clearTimeout(timeOut);
    this.scroll();
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
  scroll() {
    let that = this;
    document.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        that.setState({ shrink: "shrink" });
      } else {
        that.setState({ shrink: "" });
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
