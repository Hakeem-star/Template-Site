import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./css/Nav.scss";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shrink: "",
      display: "block",
      splash: "",
      activeNav: "",
      btnDisplay: "",
      landScrollTo: null
    };
    this.setState.bind(this);
    this.navHighlight.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(prevProps);
    if (prevProps.splash !== this.props.splash) {
      this.setState({ splash: this.props.splash });
    }

    if (prevProps.landScrollTo !== this.props.landScrollTo) {
      this.elePositionCalculate(this.state.landScrollTo);
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

    // console.log(this.props.history.location.pathname);

    if (this.props.history.location.pathname.includes("/form")) {
      this.setState({ display: "none" });
    } else {
      this.setState({ display: "block" });
    }

    this.props.history.listen(location => {
      //This should update the nav to the correct position when you land on the homepage, but does not
      console.log("HERE");
      this.navHighlight(location);
      this.scroll();
      //Hide the nav bar when you are on a form page
      if (this.props.history.location.pathname.includes("/form")) {
        this.setState({ display: "none" });
      } else {
        this.setState({ display: "block" });
      }
    });
  }

  navHighlight(location = this.props.location) {
    //regulates the nav so it displays the correct highlight
    const navClassRemover = () => {
      Array.from(document.getElementsByClassName("navGroup")).forEach(e =>
        Array.from(e.children).forEach(j => {
          //If the current element does not have the same className, remove, else add
          j.classList.remove("active");
        })
      );
    };
    //If we are not on the homepage
    if (location && location.pathname !== "/") {
      function toggler(ele, path) {
        if (
          location.pathname.split("/")[1] === path &&
          !ele.className.includes("active")
        ) {
          Array.from(document.getElementsByClassName("navGroup")).forEach(e =>
            Array.from(e.children).forEach(j => {
              //If the current element does not have the same className, remove, else add
              ele.className !== j.className
                ? j.classList.remove("active")
                : j.classList.add("active");
            })
          );
        }
      }
      toggler(
        document.getElementsByClassName("nav previewpanecontainer")[0],
        "selected_projects"
      );
      toggler(document.getElementsByClassName("nav whatwedo")[0], "what_we_do");
      // this.setState({
      //   activeNav: items[i][0]
      // });
      return;
    }

    let items = [];
    //iterate through all the children of the mainContent element that have an id
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
            next = orig[index + 1].offsetTop;
            // -    Math.round(orig[index + 1].offsetTop / 4.5);
          } else {
            next = 100000;
          }

          let name = e.id.replace(/[ _]/g, "").toLowerCase();
          // if (index > orig.length) {
          //   next_dist = 100000;
          // }
          //console.log([name, dist - distBy3, next_dist()]);
          //Create an array that contains the name of the element, the actual element, it's current position and the position of the next element
          if (index === 0) {
            items.push([name, e, 0, next]);
          } else {
            items.push([
              name,
              e,
              dist,
              // - distBy3
              next
            ]);
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
            //If the activeNav state is set, then remove class for all other elements - lingering highlight from other pages might cause duplicates
            navClassRemover();
            // Add the class to the right nav item
            document
              .getElementsByClassName(items[i][0])[0]
              .classList.add("active");

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
      this.navHighlight();

      //If we are not on the homepage
      if (this.props.history.location.pathname === "/") {
        if (window.scrollY >= 1 && this.state.shrink !== "shrink") {
          this.setState({ shrink: "shrink" });
          // this.pageNavDirection("row");
        }
        if (window.scrollY < 1 && this.state.shrink === "shrink") {
          this.setState({ shrink: "" });
          //this.pageNavDirection("row");
        }

        //Element in position is dist - distBy3
      } else {
        this.setState({ shrink: "shrink" });
      }
    });
  }

  elePositionCalculate(l) {
    console.log(l);
    let set =
      l != null && typeof l !== "string"
        ? l.target.classList[1].replace(/[. ]/g, "").toLowerCase()
        : this.state.landScrollTo;
    //If we are not on the home page, tage us back to the home page
    if (this.props.history.location.pathname !== "/") {
      //redirect to overview page
      this.props.history.push("/");
      this.setState({ landScrollTo: set });
      console.log(this.state.landScrollTo);
    }

    //And still scroll to the element, but need to work on this as we currently scroll to top of page on location change as well
    else
      Array.from(document.getElementById("mainContent").children).forEach(e => {
        //.getBoundingClientRect()
        //console.dir(l.target.classList[1]);
        // if (this.state.landScrollTo != null) {
        //   this.setState({ landScrollTo: null });
        // }
        console.log(e, l);
        if (
          //if Nav name = id of element, scroll to position
          e.id.replace(/[ _]/g, "").toLowerCase() === set
        ) {
          console.log(e);
          //returns the distance of the current element relative to the top of the offsetParent node.
          let dist = e.offsetTop;
          let navHeight = document.getElementById("pageNavigation")
            .offsetHeight;
          //Need to get this calculation right and work out why it's acting differently for parts lower
          let distBy3 = Math.round(dist / 4.5);

          window.scrollTo(0, dist);
          //- distBy3);
        }
      });
  }

  overviewCLass() {
    //Keeps the nav button black during the splash page
    return this.props.history.location.pathname === "/" ? "nActive" : "";
  }

  render() {
    return (
      <nav
        //style={{ display: this.state.display }}
        id="pageNavigation"
        className={`${this.state.shrink} ${this.state.splash}`}
      >
        <div className="links_container">
          <div className="links">
            <div className="navGroup">
              <span
                onClick={e => {
                  this.elePositionCalculate(e);
                }}
                className="nav overview clickable"
              >
                Overview .
              </span>

              <span
                onClick={e => {
                  this.elePositionCalculate(e);
                }}
                className="nav previewpanecontainer clickable"
              >
                Selected Projects
              </span>
            </div>
            <div className="navGroup">
              <span
                onClick={e => {
                  this.elePositionCalculate(e);
                }}
                className="nav whatwedo clickable"
              >
                What we do .
              </span>
              <span
                onClick={e => {
                  this.elePositionCalculate(e);
                }}
                className="nav ourapproach clickable"
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
        </div>
        <div className={`btn ${this.state.shrink}`}>
          <Link className="bwButton_A" to="/SubmitProject">
            <input
              className="bwButton clickable"
              type="button"
              value="Start a project?"
            />
          </Link>

          <input
            className="wbButton clickable"
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
