import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "../css/components/Nav.scss";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shrink: "",
      display: "block",
      splash: ""
    };
    this.setState.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.splash !== this.props.splash) {
      this.setState({ splash: this.props.splash });
    }
  }

  componentDidMount(prevProps, prevState, snapshot) {
    // if (prevState.prevScroll !== this.state.prevScroll) {
    // window.clearTimeout(timeOut);
    this.scroll();
    // document.getElementById("pageNavigation").style.flexDirection = "column";

    console.log(this.props.history.location.pathname);

    if (this.props.history.location.pathname.includes("/form")) {
      this.setState({ display: "none" });
    } else {
      this.setState({ display: "block" });
    }

    this.props.history.listen(location => {
      //Hide the nav bar when you are on a form page
      if (this.props.history.location.pathname.includes("/form")) {
        this.setState({ display: "none" });
      } else {
        this.setState({ display: "block" });
      }
    });
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
    document.getElementById("pageNavigation").style.flexDirection = direction;
  }

  scroll() {
    document.addEventListener("scroll", e => {
      if (window.scrollY >= 1 && this.state.shrink !== "shrink") {
        this.setState({ shrink: "shrink" });
        // this.pageNavDirection("row");
      }
      if (window.scrollY < 1 && this.state.shrink === "shrink") {
        this.setState({ shrink: "" });
        this.pageNavDirection("row");
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

  //Calculate postion of elements. Need to add a buffer to center the component
  // document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetHeight
  //minus
  // document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetTop
  //minus
  // document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetTop /3
  //minus
  //Nav.offsetHeight
  pageCalculate(l) {
    Array.from(document.getElementById("mainContent").children).forEach(e => {
      //.getBoundingClientRect()
      console.log(
        e.id.replace(/[ _]/g, ""),
        //l.target.innerText.replace(/[. ]/g, ""),
        e.offsetHeight -
          e.offsetTop -
          e.offsetTop / 3 -
          document.getElementById("pageNavigation").offsetHeight
      );
      if (
        e.id.replace(/[ _]/g, "") === l.target.innerText.replace(/[. ]/g, "")
      ) {
        window.scrollTo(
          0,
          e.offsetHeight -
            e.offsetTop -
            e.offsetTop / 3 -
            document.getElementById("pageNavigation").offsetHeight
        );
      }
    });
  }
  overviewCLass() {
    //Keeps the nav button black during the splash page
    return this.props.history.location.pathname === "/adefe_hq/"
      ? "nActive"
      : "";
  }

  render() {
    return (
      <nav
        //style={{ display: this.state.display }}
        id="pageNavigation"
        className={`${this.state.shrink} ${this.state.splash}`}
      >
        <div className="links">
          <div className="navGroup">
            <span
              onClick={this.pageCalculate}
              className={`nav ${this.overviewCLass()}`}
            >
              Overview .
            </span>

            <NavLink activeClassName="nActive" to="/adefe_hq/we_want">
              <span className="nav">We Want .</span>
            </NavLink>
            <NavLink activeClassName="nActive" to="/adefe_hq/what_we_do">
              <span className="nav">What we do</span>
            </NavLink>
          </div>
          <div className="navGroup">
            <NavLink activeClassName="nActive" to="/adefe_hq/our_approach">
              <span className="nav">Our Approach .</span>
            </NavLink>
            <NavLink activeClassName="nActive" to="/adefe_hq/selected_projects">
              <span className="nav">Selected Projects</span>
            </NavLink>
          </div>
          <div className="navGroup">
            <NavLink activeClassName="nActive" to="/adefe_hq/about">
              <span className="nav">About .</span>
            </NavLink>
            <NavLink activeClassName="nActive" to="/adefe_hq/contact">
              <span className="nav">Contact</span>
            </NavLink>
          </div>
        </div>
        <div className="buttons">
          <Link className="bwButton_A" to="/adefe_hq/contact/form">
            <input className="bwButton" type="button" value="Got a project?" />
          </Link>

          <input
            className="wbButton"
            onClick={this.props.stayInTouch}
            type="button"
            value="Stay in touch"
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
