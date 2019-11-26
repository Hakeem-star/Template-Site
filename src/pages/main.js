import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./main.scss";
import "./css/leftSide.scss";
import Splash from "../pages/splash";
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
import OurApproachImage1 from "../images/left_section_images/ARM_Business_Material_A5_Rectangle_33_pattern@2x.png";
import OurApproachImage2 from "../images/left_section_images/ARM_Business_Material_A5_Rectangle_33_pattern@2x.png";

import componentPositions from "./functions/componentPositions";
//RightSection - this has padding. try considering

//Calculate postion of elements. Need to add a buffer to center the component
// document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetHeight
// document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetTop
//Divide offsetHeight by 2 to get halfway through element
function WeWantImages(props) {
  return (
    <React.Fragment>
      <img
        className="showImage"
        id="contentLeftSectionImage"
        src={content_image}
        alt="description"
      />
      {/* <img src={OurApproachImage1} className="OurApproachImage1"/>
    <img src={OurApproachImage1} className="OurApproachImage2"/> */}
    </React.Fragment>
  );
}
function OurApproachImages(props) {
  return (
    <div className="OurApproachImages">
      <div className="OurApproachImage1"></div>
      <div className="OurApproachImage2"></div>
      {/* <img src={OurApproachImage1} className="OurApproachImage1"/>
    <img src={OurApproachImage1} className="OurApproachImage2"/> */}
    </div>
  );
}

function SelectedProjectsSide(props) {
  return (
    <div className="SelectedProjectsSide_Filters">
      <div className="SelectedProjectsSide_Header">Filter</div>
      <div className="SelectedProjectsSide_FilterItems">
        <div className="SelectedProjectsSide_All">All</div>
        <div className="SelectedProjectsSide_AC">Art & Culture</div>
        <div className="SelectedProjectsSide_Branding">Branding</div>
        <div className="SelectedProjectsSide_Campaigns">Campaigns</div>
        <div className="SelectedProjectsSide_Digital">Digital</div>
        <div className="SelectedProjectsSide_Media">Media</div>
        <div className="SelectedProjectsSide_Print">Print</div>
        <div className="SelectedProjectsSide_Projects">Projects</div>
        <div className="SelectedProjectsSide_Systems">Systems</div>
        <div className="SelectedProjectsSide_Tools">Tools</div>
      </div>
    </div>
  );
}

class LeftSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: content_image,
      imageDisplay: "showImage"
    };
  }
  componentDidMount(prevProps, prevState, snapshot) {
    this.showImage();
  }
  leftImages = [];
  showImage() {
    // let timeOut = setTimeout(function() {
    // document.addEventListener("scroll", () => {
    //   if (
    //     window.scrollY > componentPositions()[1][0] &&
    //     window.scrollY < componentPositions()[3][0]
    //   ) {
    //     this.leftImages = <WeWantImages />;
    //     this.setState({ imageDisplay: "showImage" });
    //   } else if (
    //     window.scrollY > componentPositions()[2][0] &&
    //     window.scrollY < componentPositions()[4][0]
    //   ) {
    //     //console.log(this.leftImages);
    //     this.leftImages = <OurApproachImages />;
    //     this.setState({ imageDisplay: "" });
    //   } else if (
    //     window.scrollY > componentPositions()[3][0] &&
    //     window.scrollY < componentPositions()[5][0]
    //   ) {
    //     //console.log(this.leftImages);
    //     this.leftImages = <SelectedProjectsSide />;
    //     this.setState({ imageDisplay: "" });
    //   } else {
    //     this.leftImages = [];
    //     this.setState({ imageDisplay: "" });
    //   }
    // });
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
            render={() => <div id="contentLeftSection">{this.leftImages}</div>}
          />
        </div>
      </div>
    );
  }
}
// let this.counter = 0;
class RightSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moved: 0,
      listenerDelayIndicator: 0,
      curEle: 0,
      elePosition: [0],
      newsletterDisplay: 0,
      mainContentMarginTop: 0
    };
    // this.currentElementCalc = this.currentElementCalc.bind(this);
    // this.setState = this.setState.bind(this);
    // componentPositions = componentPositions
  }

  componentDidMount(prevProps, prevState, snapshot) {
    // if (prevState.prevScroll !== this.state.prevScroll) {
    //window.clearTimeout(timeOut);
    //debugger;
    //this.currentElementCalc();
    // console.log(
    //   "mount",
    //   window.scrollY,
    //  // this.currentElementCalc(),
    //   componentPositions()
    // );
    // this.marginTopScrollListen();
    // //this.pageScrollListen();
    // let elePositionCopy = this.state.elePosition.slice();
    // elePositionCopy.push(document.body.scrollHeight);
    // this.setState({
    //   curEle: this.currentElementCalc(),
    //   elePosition: componentPositions()
    // });
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.curEle !== this.state.curEle) {
      // window.clearTimeout(timeOut);
      // this.timer();
      const curEleCalc = () => {
        if (
          this.state.curEle === undefined ||
          this.state.elePosition[this.state.curEle][0] === undefined
        ) {
          return 0;
        } else {
          console.log(
            this.state.elePosition,
            this.state.curEle,
            this.state.elePosition[this.state.curEle]
          );

          return this.state.elePosition[this.state.curEle][0];
        }
      };
      console.log(
        "ELE",
        curEleCalc(),
        this.state.elePosition,
        this.state.curEle
      );

      console.log("update", this.state);
      window.scrollTo({
        top: curEleCalc(),
        left: 0,
        behavior: "smooth"
      });
    }
  }

  currentElementCalc() {
    //console.trace("currentElementCalc", window.scrollY, this.state.elePosition);
    //This allows me to get the current element that should be in view when the page is loaded
    //Doing "less-than structure", which means we put the smaller numbers on top
    let ind = 0;
    let compPos = componentPositions();
    console.log(compPos);
    for (let j = 0; j <= compPos.length; j++) {
      //console.log(this.state.elePosition.length);
      if (window.scrollY <= compPos[j][0]) {
        return (ind = j);
      }
    }
    return ind;
  }
  counter = 0;
  pageScrollListen() {
    //This should allow me to pick where the page should scroll to when a scroll occurs
    //  let prev = window.scrollY;
    //  let current = window.scrollY;

    // document.addEventListener("wheel", e => e.preventDefault(), {
    //   passive: false
    // });

    document.addEventListener(
      "wheel",
      e => {
        let validScroll = () => {
          console.log(this.state.elePosition);

          return this.state.elePosition.some(s => {
            // console.log(window.scrollY, s);
            return (
              window.scrollY >= s[0] && window.scrollY <= s[0] + (s[1] - 500)
            );
          });
        };

        console.log(validScroll());
        if (!validScroll()) {
          e.preventDefault();
        } else {
          this.counter = 1;
          clearTimeout(this.timeOutInnerFunc);
          this.timeOut();
          return;
        }
        //the state check is async so it is fuffulling the condition multiple times. I need a sync variable to read and write to
        //Need a timer here to decrease the frequency of this event
        //Check if this.counter is 0
        // console.log(JSON.stringify(this.counter));

        if (this.counter === 0) {
          //Assign the current scroll position to "current" variable

          //Change the value of this.counter to 1 to indicate this action has begun, so other events don't satisfy this condition
          this.counter = 1;
          //Clear timeout
          clearTimeout(this.timeOutInnerFunc);
          this.timeOut();
          console.log(
            "scrolling",
            this.state.curEle,
            this.state.elePosition.length
          );
          //delta indicates the direction the wheel is moving. Greater than 0 means down
          //If we are scrolling down and are not at the last element
          if (
            e.deltaY > 0 &&
            this.state.curEle !== this.state.elePosition.length - 2
          ) {
            //we have scrolled down
            console.log("down");
            //cur -= 1;
            //increase the index this.counter for the current element
            this.setState({
              curEle: this.state.curEle + 1
              //listenerDelayIndicator: 1
            });
          } else if (e.deltaY < 0 && this.state.curEle !== 0) {
            console.log("up");
            //decrease the index this.counter for the current element
            this.setState({
              curEle: this.state.curEle - 1
              // listenerDelayIndicator: 1
            });
          }
        } else {
          //console.log("clear");
          clearTimeout(this.timeOutInnerFunc);
          this.timeOut();
        }
      },
      {
        passive: false
      }
    );
  }
  timeOutInnerFunc;

  timeOut = () => {
    // let cur = this.state.curEle;
    this.timeOutInnerFunc = setTimeout(() => {
      console.log("Doing");
      this.counter = 0;
      //that.setState({ listenerDelayIndicator: 0 }, () => {
      //clearTimeout(that.timeOut);
      //});
      console.log(componentPositions());
      this.setState({
        //curEle: this.state.curEle - 1,
        elePosition: componentPositions()
        // listenerDelayIndicator: 1
      });
    }, 100);
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
    let val = this.state.newsletterDisplay ? 0 : 1;
    this.setState({ newsletterDisplay: val });
  }
  closeNewsletter() {
    let val = this.state.newsletterDisplay ? 0 : 1;
    this.setState({ newsletterDisplay: val });
  }
  render() {
    let moved = this.state.moved ? "moved" : "";

    return (
      <div id="RightSectionContainer">
        <div id="RightSection">
          <Header />
          <Nav />

          <div className={moved} id="mainContent">
            <Route path="/adefe_hq/overview" component={Overview} />
            <Route exact path="/adefe_hq/we_want" component={WeWant} />
            <Route
              exact
              path="/adefe_hq/our_approach"
              component={ourApproach}
            />
            <Route
              exact
              path="/adefe_hq/selected_projects"
              component={SelectedProjects}
            />
            <Route exact path="/adefe_hq/about" component={About} />
            <Route exact path="/adefe_hq/contact" component={Contact} />
            <Route exact path="/adefe_hq/contact/form" component={Projects} />
            <Route
              exact
              path="/adefe_hq/newsletter"
              render={props => (
                <Newsletter
                  displayState={this.state.newsletterDisplay}
                  closeNewsletter={() => this.closeNewsletter()}
                  {...props}
                />
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
          {/* <Route path="/adefe_hq/" component={Splash} /> */}

          <LeftSection />
          <RightSection />
        </Router>
      </div>
    );
  }
}

export default Main;
