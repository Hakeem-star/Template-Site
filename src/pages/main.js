import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./main.scss";
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
import componentPositions from "./functions/componentPositions";
//RightSection - this has padding. try considering

//Calculate postion of elements. Need to add a buffer to center the component
// document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetHeight
// document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetTop
//Divide offsetHeight by 2 to get halfway through element
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
      if (
        window.scrollY > componentPositions()[1] &&
        window.scrollY < componentPositions()[3]
      ) {
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
    let testing = () => {
      const targetNode = document.getElementById("mainContent");
      const config = { attributes: true, childList: false, subtree: false };
      const callback = (mutationsList, observer) => {
        // Use traditional 'for loops' for IE 11
        let mainOffset = document.getElementById("mainContent").offsetTop;
        this.setState({
          curEle: this.state.curEle,
          elePosition: componentPositions()
        });
        // console.log(
        //   mutationsList,
        //   getComputedStyle(mutationsList[0].target).marginTop,
        //   mainOffset
        // );
        for (let mutation of mutationsList) {
          if (mutation.type === "childList") {
            console.log("A child node has been added or removed.");
          } else if (mutation.type === "attributes") {
            console.log(
              "The " + mutation.attributeName + " attribute was modified."
            );
          }
        }
      };
      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(callback);
      // Start observing the target node for configured mutations
      // observer.observe(targetNode, config);
    };
    //this.currentElementCalc();
    console.log(
      "mount",
      window.scrollY,
      this.currentElementCalc(),
      componentPositions()
    );
    this.marginTopScrollListen();
    this.pageScrollListen();
    let elePositionCopy = this.state.elePosition.slice();
    elePositionCopy.push(document.body.scrollHeight);
    this.setState({
      curEle: this.currentElementCalc(),
      elePosition: componentPositions()
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

  currentElementBodyHeight() {
    let elementsOnPage = document.getElementById("mainContent").children;
    let mainOffset = document.getElementById("mainContent").offsetTop;
    //To create a scroll area for content,
    //calculate the height of the element and then add it from the offset top of the body
    let eleHeight = Array.slice.call(elementsOnPage).map(e => {
      return e.offsetHeight + mainOffset;
    });
  }

  currentElementCalc() {
    //console.trace("currentElementCalc", window.scrollY, this.state.elePosition);
    //This allows me to get the current element that should be in view when the page is loaded
    //Doing "less-than structure", which means we put the smaller numbers on top
    let ind = 0;
    let compPos = componentPositions();
    console.log(compPos);
    for (let j = 0; j <= compPos.length; j++) {
      console.log(this.state.elePosition.length);
      if (window.scrollY < compPos[j]) {
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
    let that = this;
    document.addEventListener(
      "wheel",
      function wheely(e) {
        console.log(e.path);
        e.preventDefault();
        //console.log(this.counter, "delta", e.deltaY, e.deltaX);

        //the state check is async so it is fuffulling the condition multiple times. I need a sync variable to read and write to
        //Need a timer here to decrease the frequency of this event
        //Check if this.counter is 0
        //console.log(this.state.listenerDelayIndicator);

        if (that.counter === 0) {
          //Assign the current scroll position to "current" variable

          //Change the value of this.counter to 1 to indicate this action has begun, so other events don't satisfy this condition
          that.counter = 1;
          //Clear timeout
          clearTimeout(that.timeOut);
          that.timeOut();
          console.log("DOWn", that.state.curEle, that.state.elePosition.length);
          //delta indicates the direction the wheel is moving. Greater than 0 means down
          //If we are scrolling down and are not at the last element
          if (
            e.deltaY > 0 &&
            that.state.curEle !== that.state.elePosition.length - 1
          ) {
            //we have scrolled down
            //console.log("down");
            //cur -= 1;
            //increase the index this.counter for the current element
            that.setState({
              curEle: that.state.curEle + 1
              //listenerDelayIndicator: 1
            });
          } else if (e.deltaY < 0 && that.state.curEle !== 0) {
            console.log("up");
            //decrease the index this.counter for the current element
            that.setState({
              curEle: that.state.curEle - 1
              // listenerDelayIndicator: 1
            });
          }

          // //Find out what direction we are scrolling
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

          document.removeEventListener("wheel", wheely);
          document.addEventListener("wheel", wheely);
        }
      },
      {
        passive: false
      }
    );
  }

  timeOut = () => {
    // let cur = this.state.curEle;
    setTimeout(() => {
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
    }, 1500);
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
            <Route path="/adefe_hq/" component={Overview} />
            <Route path="/adefe_hq/" component={WeWant} />
            <Route path="/adefe_hq/" component={ourApproach} />
            <Route path="/adefe_hq/" component={SelectedProjects} />
            <Route path="/adefe_hq/" component={About} />
            <Route path="/adefe_hq/" component={Contact} />
            <Route path="/adefe_hq/contact/form" component={Projects} />
            <Route
              path="/adefe_hq/"
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
