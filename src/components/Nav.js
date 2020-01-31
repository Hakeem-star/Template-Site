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
      splash: "",
      activeNav: "",
      btnDisplay: ""
    };
    this.setState.bind(this);
    this.navHighlight.bind(this);
  }

  componentDidUpdate(prevProps) {
    //console.log(prevProps);
    if (prevProps.splash !== this.props.splash) {
      this.setState({ splash: this.props.splash });
    }
  }

  componentDidMount(prevProps, prevState, snapshot) {
    // if (prevState.prevScroll !== this.state.prevScroll) {
    // window.clearTimeout(timeOut);
    //TODO
    this.navHighlight();
    //Need to change this so it shrinks the nav, not move it
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
  navHighlight() {
    let items = [];
    Array.from(document.getElementById("mainContent").children).forEach(
      (e, index, orig) => {
        //Check if the element has an id
        if (e.id.length > 0) {
          let dist = e.offsetTop;
          let distBy3 = Math.round(dist / 4.5);
          //console.log("ORIG", orig[index + 1]);
          let next;
          // console.log(e.offsetTop, orig[index + 1].offsetTop);

          //If we are not at the end of the array
          if (index !== orig.length - 1) {
            next =
              orig[index + 1].offsetTop -
              Math.round(orig[index + 1].offsetTop / 4.5);
          } else {
            next = 100000;
          }

          let name = e.id.replace(/[ _]/g, "").toLowerCase();
          // if (index > orig.length) {
          //   next_dist = 100000;
          // }
          //console.log([name, dist - distBy3, next_dist()]);
          if (index === 0) {
            items.push([name, e, 0, next]);
          } else {
            items.push([name, e, dist - distBy3, next]);
          }
        }
      }
    );
    //console.log(items);

    for (let i = 0; i <= items.length - 1; i++) {
      if (window.scrollY >= items[i][2] && window.scrollY < items[i][3]) {
        let activeNav = this.state.activeNav;
        //If it's an element I can select
        if (document.getElementsByClassName(items[i][0])[0]) {
          //Check if it's not the element that already has the class
          if (items[i][0] !== activeNav) {
            // console.log(
            //   window.scrollY,
            //   items[i][0],
            //   activeNav,
            //   items[i][2],
            //   items[i][3]
            // );

            document
              .getElementsByClassName(items[i][0])[0]
              .classList.add("active");

            //If the activeNav state is set, then remove class for previous element
            this.state.activeNav.length > 0 &&
              document
                .getElementsByClassName(activeNav)[0]
                .classList.remove("active");

            this.setState({
              activeNav: items[i][0]
            });
            return;
          }
        }
      }
    }
  }

  scroll() {
    document.addEventListener("scroll", e => {
      if (window.scrollY >= 1 && this.state.shrink !== "shrink") {
        this.setState({ shrink: "shrink" });
        // this.pageNavDirection("row");
      }
      if (window.scrollY < 1 && this.state.shrink === "shrink") {
        this.setState({ shrink: "" });
        //this.pageNavDirection("row");
      }

      //Element in position is dist - distBy3

      //NEED TO DEBOUNCE THIS PART?
      this.navHighlight();
    });
  }

  // pageNavCalculate() {
  //   const pageNavRect = document.getElementById("pageNavigation");
  //   //Height with padding
  //   const pageNavOffHeight = pageNavRect.offsetHeight;
  //   //Margin height
  //   const pageNavCompHeight = window.getComputedStyle(pageNavRect);
  //   const pageNavMarginHeight =
  //     parseInt(pageNavCompHeight.marginBottom.split("p")[0]) +
  //     parseInt(pageNavCompHeight.marginTop.split("p")[0]);
  //   return pageNavOffHeight + pageNavMarginHeight;
  // }

  //Calculate postion of elements. Need to add a buffer to center the component
  // document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetHeight
  //minus
  // document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetTop
  //minus
  // document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetTop /3
  //minus
  //Nav.offsetHeight
  elePositionCalculate(l) {
    Array.from(document.getElementById("mainContent").children).forEach(e => {
      //.getBoundingClientRect()
      //console.dir(l.target.classList[1]);
      if (
        //if Nav name = id of element, scroll to position
        e.id.replace(/[ _]/g, "").toLowerCase() ===
        l.target.classList[1].replace(/[. ]/g, "").toLowerCase()
      ) {
        //returns the distance of the current element relative to the top of the offsetParent node.
        let dist = e.offsetTop;
        let navHeight = document.getElementById("pageNavigation").offsetHeight;
        //Need to get this calculation right and work out why it's acting differently for parts lower
        let distBy3 = Math.round(dist / 4.5);

        window.scrollTo(0, dist - distBy3);
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
            <span onClick={this.elePositionCalculate} className="nav overview">
              Overview .
            </span>

            <span
              onClick={this.elePositionCalculate}
              className="nav previewpanecontainer"
            >
              Selected Projects
            </span>
          </div>
          <div className="navGroup">
            <span onClick={this.elePositionCalculate} className="nav whatwedo">
              What we do .
            </span>
            <span
              onClick={this.elePositionCalculate}
              className="nav ourapproach"
            >
              Our Approach & Values
            </span>
          </div>
          {/* <div className="navGroup">
            <NavLink activeClassName="nActive" to="/adefe_hq/about">
              <span className="nav">About .</span>
            </NavLink>
            <NavLink activeClassName="nActive" to="/adefe_hq/contact">
              <span className="nav">Contact</span>
            </NavLink>
          </div> */}
        </div>
        <div className={`buttons ${this.state.shrink}`}>
          <Link className="bwButton_A" to="/adefe_hq/SubmitProject">
            <input
              className="bwButton"
              type="button"
              value="Start a project?"
            />
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
