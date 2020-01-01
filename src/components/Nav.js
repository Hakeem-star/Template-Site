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
    let scrolled = 0;
    direction === "row" ? (scrolled = 1) : (scrolled = 0);
    const before = this.pageNavCalculate();
    setTimeout(() => {
      document.getElementById("pageNavigation").style.flexDirection = direction;
      const after = this.pageNavCalculate();
      //   this.mainContentMargin(scrolled, before - after);
    }, 200);
  }

  scroll() {
    document.addEventListener("scroll", e => {
      if (window.scrollY >= 1 && this.state.shrink !== "shrink") {
        this.setState({ shrink: "shrink" });
        this.pageNavDirection("row");
      }
      if (window.scrollY < 1 && this.state.shrink === "shrink") {
        this.setState({ shrink: "" });
        this.pageNavDirection("column");
      }
    });
  }

  pageNavCalculate() {
    const pageNavRect = document.getElementById("pageNavigation");
    //Height with padding
    const pageNavOffHeight = pageNavRect.offsetHeight;
    //Margin height
    const pageNavCompHeight = window.getComputedStyle(pageNavRect);
    const pageNavMarginHeight =
      parseInt(pageNavCompHeight.marginBottom.split("p")[0]) +
      parseInt(pageNavCompHeight.marginTop.split("p")[0]);
    return pageNavOffHeight + pageNavMarginHeight;
  }

  mainContentMargin(scrolled = true, pageNav) {
    const mainContent = document.getElementById("mainContent");
    //scrolled lets me know which direction they have scrolled with a true false value
    if (scrolled) {
      mainContent.style.marginTop = `${pageNav}px`;
      console.dir(mainContent.style.marginTop, pageNav);
      /*Need to add a condition for the bottom of the page. 
      A weird bug? seems to happen when you scroll to the bottom of the page before the animation is ended. 
      Need to listen to the bottom of the page, grab the computated value of the margin, and the apply it*/
    } else {
      mainContent.style.marginTop = 0;
    }
  }
  overviewCLass() {
    //Keeps the nav button black during the splash page
    return this.props.history.location.pathname === "/adefe_hq/"
      ? "nActive"
      : "";
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
