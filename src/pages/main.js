import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./main.scss";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Overview from "../components/content/Overview";
import WeWant from "../components/content/WeWant";
import ourApproach from "../components/content/ourApproach";
import SelectedProjects from "../components/content/selectedProjects";
import About from "../components/content/About";
import Contact from "../components/content/Contact";
import Projects from "../pages/projects";
import Newsletter from "../pages/newsletter";
import logo from "../images/logos/Adefe_HQ_Short_Web_A3_Rectangle_13_pattern@2x.png";
import content_image from "../images/left_section_images/ARM_Business_Material_A5_Rectangle_33_pattern@2x.png";

class LeftSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: content_image,
      imageDisplay: ""
    };
  }
  componentDidMount(prevProps, prevState, snapshot) {
    this.showImage();
  }

  showImage() {
    // let timeOut = setTimeout(function() {
    console.log("testOut");
    document.addEventListener("scroll", () => {
      //console.log(window.scrollY > 500);
      if (window.scrollY > 950 && window.scrollY < 1790) {
        this.setState({ imageDisplay: "showImage" });
      } else {
        this.setState({ imageDisplay: "" });
      }
    });
    // window.clearTimeout(timeOut);
    // }, 500);
  }
  render() {
    return (
      <div id="LeftSectionContainer">
        <div id="LeftSection">
          <div id="LeftSectionLogo">
            <Link to="/adefe_hq/">
              <img
                id="LeftSectionLogoImage"
                src={logo}
                alt="Adefe_HQ_Short_Web_A3_Rectangle_13_pattern"
              />
            </Link>
          </div>

          <Route
            path="/adefe_hq/"
            render={() => (
              <div id="contentLeftSection">
                <img
                  className={this.state.imageDisplay}
                  id="contentLeftSectionImage"
                  src={this.state.image}
                  alt="description"
                />
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}
let counter = 0;
class RightSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moved: 0,
      listenerDelayIndicator: 0,
      curEle: 0,
      elePosition: [0, 150, 951, 1790],
      newsletter: 0
    };
  }
  componentDidMount(prevProps, prevState, snapshot) {
    // if (prevState.prevScroll !== this.state.prevScroll) {
    //window.clearTimeout(timeOut);
    console.log("mount", this.state.curEle);
    this.marginTopScrollListen();
    //this.pageScrollListen();
    let elePositionCopy = this.state.elePosition.slice();
    elePositionCopy.push(document.body.scrollHeight);
    this.setState({
      curEle: this.currentElementCalc(),
      elePosition: elePositionCopy
    });
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.curEle !== this.state.curEle) {
      // window.clearTimeout(timeOut);
      // this.timer();
      const curEleCalc = () => {
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
      return 0;
    }
    if (window.scrollY < this.state.elePosition[2]) {
      return 1;
    }
    if (window.scrollY < this.state.elePosition[3]) {
      return 2;
    } else {
      return 3;
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
        //the state check is async so it is fuffulling the condition multiple times. I need a sync variable to read and write to
        //Need a timer here to decrease the frequency of this event
        //Check if i is 0
        console.log(this.state.listenerDelayIndicator);
        if (counter === 0) {
          //Check if it is, change the value to 1 to indicate this action has begun, so other events don't satisfy this condition
          current = window.scrollY;
          console.log(e, current, prev);
          counter = 1;
          clearTimeout(this.timeOut);
          this.timeOut();

          if (
            e.deltaY > 0 &&
            this.state.curEle !== this.state.elePosition.length - 1
          ) {
            //we have scrolled down
            console.log("down");
            //cur -= 1;
            this.setState({
              curEle: this.state.curEle + 1
              //           listenerDelayIndicator: 1
            });
          } else if (e.deltaY < 0 && this.state.curEle !== 0) {
            console.log("up");

            this.setState({
              curEle: this.state.curEle - 1,
              listenerDelayIndicator: 1
            });
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
        }
      },
      {
        passive: false
      }
    );
  }

  timeOut = () => {
    // let cur = this.state.curEle;
    setTimeout(function() {
      console.log("Doing");
      counter = 0;
      //that.setState({ listenerDelayIndicator: 0 }, () => {
      //clearTimeout(that.timeOut);
      //});
    }, 500);
  };
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

  stayInTouch() {
    let val = this.state.newsletter ? 0 : 1;
    this.setState({ newsletter: val });
  }

  render() {
    let moved = this.state.moved ? "moved" : "";
    return (
      <div id="RightSectionContainer">
        <div id="RightSection">
          <Header />
          <Nav />

          <div className={moved} id="mainContent">
            <Route path="/adefe_hq/" component={Overview} />
            <Route path="/adefe_hq/" component={WeWant} />
            <Route path="/adefe_hq/" component={ourApproach} />
            <Route path="/adefe_hq/" component={SelectedProjects} />
            <Route path="/adefe_hq/" component={About} />
            <Route path="/adefe_hq/" component={Contact} />
            <Route path="/adefe_hq/contact/form" component={Projects} />
            <Route
              path="/adefe_hq/stay_in_touch"
              render={props => (
                <Newsletter displayState={this.state.newsletter} {...props} />
              )}
            />
          </div>
          <Footer
            stayInTouch={e => {
              this.stayInTouch();
            }}
          />
        </div>
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
