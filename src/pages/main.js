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
let listenerDelayIndicator = 0;
class RightSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moved: 0,
      curEle: 0,
      elePosition: [0, 150, 703, 1310]
    };
  }
  componentDidMount(prevProps, prevState, snapshot) {
    // if (prevState.prevScroll !== this.state.prevScroll) {
    //window.clearTimeout(timeOut);
    console.log("mount", this.state.curEle);
    this.marginTopScrollListen();
    this.pageScrollListen();
    this.setState({ curEle: this.currentElementCalc() });
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.curEle !== this.state.curEle) {
      // window.clearTimeout(timeOut);
      // this.timer();
      let curEleCalc = () => {
        if (this.state.curEle === undefined) {
          return 0;
        } else {
          return this.state.elePosition[this.state.curEle];
        }
      };
      console.log("update", this.state);
      window.scrollTo({
        top: curEleCalc(),
        left: 0,
        behavior: "smooth"
      });
    }
  }
  currentElementCalc() {
    //This allows me to get the current element that should be in view when the page is loaded
    //Doing less than structure, which means we put the smaller numbers on top
    if (window.scrollY < this.state.elePosition[1]) {
      return 1;
    }
    if (window.scrollY < this.state.elePosition[2]) {
      return 2;
    }
  }
  pageScrollListen() {
    //This should allow me to pick where the page should scroll to when a scroll occurs
    let prev = window.scrollY;
    let current = window.scrollY;

    // document.addEventListener("wheel", e => e.preventDefault(), {
    //   passive: false
    // });

    document.addEventListener(
      "wheel",
      e => {
        e.preventDefault();

        //Need a timer here to decrease the frequency of this event
        //Check if i is 0
        if (listenerDelayIndicator === 0) {
          //Check if it is, change the value to 1 to indicate this action has begun, so other events don't satisfy this condition
          listenerDelayIndicator = 1;
          current = window.scrollY;
          console.log(e, current, prev);

          if (
            e.deltaY > 0 &&
            this.state.curEle !== this.state.elePosition.length - 1
          ) {
            //we have scrolled down
            console.log("down");
            //cur -= 1;
            this.setState({ curEle: this.state.curEle + 1 });
          } else if (e.deltaY < 0 && this.state.curEle !== 0) {
            console.log("up");

            this.setState({ curEle: this.state.curEle - 1 });
          }

          //Find out what direction we are scrolling
          // if (current < prev) {
          //   //we have scrolled up
          //   //Get the current scroll position
          //   console.log("up");
          //   //cur += 1;
          //   prev = window.scrollY;
          //   this.setState({ curEle: this.state.curEle + 1 });
          // } else if (current > prev && this.state.curEle !== 0) {
          //   //we have scrolled down
          //   //Get the current scroll position
          //   current = window.scrollY;
          //   //we have scrolled down
          //   console.log("down");
          //   //cur -= 1;
          //   prev = window.scrollY;
          //   this.setState({ curEle: this.state.curEle - 1 });
          // }

          timeOut();
        }
      },
      {
        passive: false
      }
    );

    timeOut = () => {
      // let cur = this.state.curEle;
      setTimeout(function() {
        listenerDelayIndicator = 0;
        clearTimeout(timeOut);
      }, 300);
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
