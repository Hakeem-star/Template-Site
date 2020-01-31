import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";
import { throttle } from "lodash";
import { withRouter } from "react-router";
import "../css/main.scss";
import "../css/pages/leftSide.scss";
import Splash from "../pages/splash";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Overview from "./Overview";
import WeWant from "./WeWant";
import WhatWeDo from "./WhatWeDo";
import Partners from "./Partners";
import ourApproach from "./ourApproach";
import SelectedProjects from "./selectedProjects";
import selectedProjectsPreviewPane from "../components/selectedProjectsPreviewPane";
import About from "./About";
import Contact from "./Contact";
import Projects from "../pages/projects";
import Newsletter from "../pages/newsletter";
import logo from "../images/logos/Adefe_HQ_Short_Web_A3_Rectangle_13_pattern@2x.png";
import OurApproachImage2 from "../images/left_section_images/ARM_Business_Material_A5_Rectangle_33_pattern@2x.png";
import activeFilter from "../Functions/activeFilter";
import componentPositions from "./functions/componentPositions";

//RightSection - this has padding. try considering

//Calculate postion of elements. Need to add a buffer to center the component
// document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetHeight
//minus
// document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetTop
//minus
// document.querySelectorAll("#we_want > div:nth-child(1) > div.we_want_text")[0].offsetTop /3
//minus
//Nav.offsetHeight

//Divide offsetHeight by 2 to get halfway through element

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

class AdefeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(prevProps, prevState, snapshot) {
    // console.log(this.props, JSON.stringify(this.props.history));
    // this.pageCheck(this.props.history.location);
    // this.props.history.listen(location => {
    //   this.pageCheck(location);
    // });
  }

  render() {
    return (
      <div id="LeftSectionLogo">
        <Link to="/adefe_hq/">
          <img
            id="LeftSectionLogoImage"
            src={logo}
            alt="Adefe_HQ_Short_Web_A3_Rectangle_13_pattern"
          />
        </Link>
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
      mainContentMarginTop: 0,
      splash: ""
    };
    // this.currentElementCalc = this.currentElementCalc.bind(this);
    // this.setState = this.setState.bind(this);
    // componentPositions = componentPositions
  }

  componentDidMount(prevProps, prevState, snapshot) {
    console.log("MOUNT");

    //height of the element
    //Listen to page change and rest page height on land - Need to remove listener and do it on prop change
    //need to see if it's better to change the height
    this.props.history.listen(location => {
      console.log(this.props.history);
      window.scrollTo({ top: 0, behaviour: "auto" });
    });

    window.addEventListener("scroll", this._handleMomentumScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleMomentumScroll);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.splash !== this.props.splash) {
      this.setState({ splash: this.props.splash });
    }
  }

  _handleMomentumScroll(e) {
    const scrollConfig = Math.round(window.scrollY / 3);
    //console.log(window.scrollY);
    //console.log("PRINT", document.getElementById("mainContent"));
    const mainContentStatus = document.getElementById("mainContent");

    //height of the element
    const scrollHeight = Math.round(mainContentStatus.scrollHeight); // - contentOffsetTop; //- scrollConfig;

    const contentCover = document.getElementById("contentCover");

    //console.log(scrollConfig, scrollHeight, contentOffsetTop);

    //if the amount of pixels scrolled is less than the height of the element
    if (window.scrollY < scrollHeight) {
      mainContentStatus.style.transform = `translate3d(0, ${-scrollConfig}px, 0)`;

      //Calculate the overall height of the container
      //For some reason, adding 10vw to the calculation stops the jittering. Very strange - ask Anthony
      contentCover.style.height = `calc(${scrollHeight -
        Math.round(window.scrollY / 3)}px)`;
      contentCover.style.minHeight = "100vh";
    } else {
      console.log("DOING");
      mainContentStatus.style.transform = `translateY(${-scrollHeight}px)`;
    }
    //   else {
    //   mainContentStatus.style.transform = `translateY(${-scrollHeight}px)`;
    // }
  }
  //To scroll to links
  //window.scrollTo(0,
  //window offset - not entirely sure what is
  //window.pageYOffset +
  // get the top of the element - not sure about this either
  //$0.getBoundingClientRect().top-
  //This is the total height of the nav, so I suppose I could use the bounding client values as well
  //130)
  stayInTouch() {
    console.log("Stay");

    let val = this.state.newsletterDisplay ? 0 : 1;
    this.setState({ newsletterDisplay: val });
  }
  render() {
    let moved = this.state.moved ? "moved" : "";

    return (
      <div id="RightSectionContainer">
        <div id="RightSection">
          <Header splash={this.props.splash} />

          <Route
            path="/adefe_hq/"
            render={props => (
              <Nav
                stayInTouch={() => {
                  this.stayInTouch();
                }}
                {...props}
                splash={this.props.splash}
              />
            )}
          />
          <div id="contentCover" className={this.state.splash}>
            <div className={moved} id="mainContent">
              <Route exact path="/adefe_hq/" component={Overview} />
              <Route
                exact
                path="/adefe_hq/"
                component={selectedProjectsPreviewPane}
              />
              {/* <Route exact path="/adefe_hq/" component={WeWant} /> */}
              <Route exact path="/adefe_hq/" component={WhatWeDo} />
              <Route exact path="/adefe_hq/" component={ourApproach} />
              <Route exact path="/adefe_hq/" component={Partners} />

              <Route
                path="/adefe_hq/selected_projects"
                component={SelectedProjects}
              />
              {/* <Route exact path="/adefe_hq/" component={About} /> */}
              <Route exact path="/adefe_hq/" component={Contact} />
              <Route
                exact
                path="/adefe_hq/SubmitProject"
                component={Projects}
              />
            </div>
          </div>
          {/* <Footer
            stayInTouch={e => {
              this.stayInTouch();
            }}
          /> */}
          <Route
            path="/adefe_hq/"
            render={props => (
              <Newsletter
                displayState={this.state.newsletterDisplay}
                closeNewsletter={() => this.stayInTouch()}
                {...props}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

function SplashConditional(props) {
  console.log(props);
  if (!props.splash) {
    return <Splash {...props} />;
  } else {
    return null;
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: 0
    };
  }
  componentDidMount() {}
  //This changes the state to splash when the splash animation finishes and initialises the slide in animations.
  // splashEnd() {
  //   this.setState({ splash: "splash" });
  // }
  splashDone() {
    this.setState({
      splash: 1
    });
  }
  render() {
    return (
      <div id="mainContainer">
        <Router>
          <Route
            path="/adefe_hq"
            render={props => <AdefeHeader {...props} />}
          />

          <Route
            exact
            path="/"
            render={props => <Redirect to="/adefe_hq/" {...props} />}
          />

          <Route
            exact
            path="/adefe_hq/"
            render={props => (
              <SplashConditional
                splashDone={() => this.splashDone()}
                splash={this.state.splash}
                {...props}
              />
            )}
          />

          <Route
            path="/adefe_hq"
            render={props => <RightSection {...props} />}
          />
        </Router>
      </div>
    );
  }
}

export default Main;
