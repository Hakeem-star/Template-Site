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

    if (prevState.landScrollTo !== this.state.landScrollTo) {
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
    //If we are not on the homepage,this makes sure the correct nav link is higlighted based on the url path
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
          let next;
          //If we are not at the end of the array
          if (index !== orig.length - 1) {
            //next is the next elements offsetTop
            next = orig[index + 1].offsetTop;
            // -    Math.round(orig[index + 1].offsetTop / 4.5);
          } else {
            //Else give the next element a very hight offsetTop value
            next = 100000;
          }
          //Clean up the elements name and transform to lower case
          let name = e.id.replace(/[ _]/g, "").toLowerCase();

          //Create an array that contains the name of the element, the element node,
          //it's current position and the position of the next element
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
    //Iterate through the array from above
    for (let i = 0; i <= items.length - 1; i++) {
      if (window.scrollY >= items[i][2] && window.scrollY < items[i][3]) {
        let activeNav = this.state.activeNav;
        //If it's an element I can select
        if (document.getElementsByClassName(items[i][0])[0]) {
          //Check if it's not the element that already has the class
          if (items[i][0] !== activeNav) {
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
      typeof l === "string"
        ? l
        : l.target.classList[1].replace(/[. ]/g, "").toLowerCase();
    //If we are not on the home page, take us back to the home page and change the state of landScrollTo, causing this function to run again
    if (this.props.history.location.pathname !== "/") {
      //redirect to overview page
      this.props.history.push("/");
      //Set the state so it can be used
      this.setState({ landScrollTo: set });
      console.log(this.state.landScrollTo);
    }

    //If we are on the homepage, scroll to element by matching Nav element Id with element Id
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
          //returns the distance of the current element relative to the top of the offsetParent node.
          const dist = e.offsetTop;
          const mainContentOffsetTop = document.getElementById("mainContent")
            .offsetTop;
          const NavHeight = document.getElementById("pageNavigation")
            .offsetHeight;
          window.scrollTo({
            left: 0,
            top: dist + NavHeight - mainContentOffsetTop,
            behavior: "smooth"
          });
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
              {/*Clicking on Selected projects takes you to the selected projects page instead of scrolling the page*/}
              <span
                onClick={e => {
                  this.props.history.push("/selected_projects");
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
        <div className={`buttons ${this.state.shrink}`}>
          <Link to="/SubmitProject">
            <button className="__SubmitProject bwButton clickable">
              Start a project?
            </button>
          </Link>

          <button
            className="__stayInTouch wbButton clickable"
            onClick={this.props.stayInTouch}
          >
            Stay in touch
          </button>
        </div>
      </nav>
    );
  }
}
export default Nav;
