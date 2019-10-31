import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./main.scss";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Overview from "../components/content/Overview";
import WeWant from "../components/content/WeWant";
import ourApproach from "../components/content/ourApproach";
import selectedProjects from "../components/content/selectedProjects";
import logo from "../images/logos/Adefe_HQ_Short_Web_A3_Rectangle_13_pattern@2x.png";
import content_image from "../images/left_section_images/ARM_Business_Material_A5_Rectangle_33_pattern@2x.png";

class LeftSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: content_image
    };
  }

  showImage() {
    let that = this;
    // let timeOut = setTimeout(function() {
    //   console.log("testOut");
    //   // document.addEventListener("scroll", () => {
    //   //   //console.log(window.scrollY > 500);

    //   //   if (window.scrollY > 500) {
    //   //     that.setState({ i: content_image });
    //   //   } else {
    //   //     that.setState({ i: "" });
    //   //   }
    //   // });
    //   window.clearTimeout(timeOut);
    // }, 500);
  }
  render() {
    return (
      <div id="LeftSection">
        <div id="LeftSectionLogo">
          <img
            id="LeftSectionLogoImage"
            src={logo}
            alt="Adefe_HQ_Short_Web_A3_Rectangle_13_pattern"
          />
        </div>

        <Route
          path="/"
          render={() => (
            <div id="contentLeftSection">
              <img
                onScroll={this.showImage()}
                id="contentLeftSectionImage"
                src={this.state.i}
                alt="description"
              />
            </div>
          )}
        />
      </div>
    );
  }
}
let timeOut;
let i = 0;
class RightSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moved: 0,
      curEle: 1000
    };
  }
  componentDidMount(prevProps, prevState, snapshot) {
    // if (prevState.prevScroll !== this.state.prevScroll) {
    //window.clearTimeout(timeOut);
    this.marginTopScrollListen();
    this.pageScrollListen();
    // }
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevState.show !== this.state.show) {
  //     window.clearTimeout(timeOut);
  //     this.timer();
  //   }
  // }

  pageScrollListen() {
    //This should allow me to pick where the page should scroll to when a scroll occurs
    let prev = window.scrollY;
    let current = window.scrollY;
    let x = window.scrollX;
    let y = window.scrollY;
    // document.addEventListener("wheel", e => e.preventDefault(), {
    //   passive: false
    // });

    document.addEventListener("wheel", e => {
      console.log(e);

      //Need a timer here to decrease the frequency of this event?
      if (i === 0) {
        i = 1;
        timeOut();
      }
      //e.preventDefault();
    });

    timeOut = () => {
      let cur = this.state.curEle;
      setTimeout(function() {
        current = window.scrollY;
        if (current < prev) {
          //we have scrolled up
          console.log("up");
          cur += 1;
          // this.setState({ curEle: cur });
        } else if (current > prev) {
          //we have scrolled down
          console.log("down");
          cur -= 1;
          //this.setState({ curEle: cur });
        }

        prev = window.scrollY;
        // window.scrollTo(x, y);
        clearTimeout(timeOut);
        i = 0;
      }, 500);
    };
  }

  marginTopScrollListen() {
    //Grow a margin which aligns the content to the correct part of the page when the page is scrolled down
    document.addEventListener("scroll", e => {
      if (window.scrollY > 1) {
        if (!this.state.moved) {
          this.setState({ moved: 1 });
        }
      }
      if (window.scrollY < 1) {
        if (this.state.moved) {
          this.setState({ moved: 0 });
        }
      }
    });
  }
  render() {
    let moved = this.state.moved ? "moved" : "";
    return (
      <div id="RightSection">
        <Header />
        <Nav />

        <div className={moved} id="mainContent">
          <Route path="/" component={Overview} />
          <Route path="/" component={WeWant} />
          <Route path="/" component={ourApproach} />
          <Route path="/" component={selectedProjects} />
        </div>
        <Footer />
      </div>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mainContainer">
        <Router>
          <LeftSection />
          <RightSection />
        </Router>
      </div>
    );
  }
}

export default Main;
