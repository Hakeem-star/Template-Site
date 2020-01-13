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
import ourApproach from "./ourApproach";
import SelectedProjects from "./selectedProjects";
import About from "./About";
import Contact from "./Contact";
import Projects from "../pages/projects";
import Newsletter from "../pages/newsletter";
import logo from "../images/logos/Adefe_HQ_Short_Web_A3_Rectangle_13_pattern@2x.png";
import content_image from "../images/left_section_images/ARM_Business_Material_A5_Rectangle_33_pattern@2x.png";
import back_arrow from "../images/Icons/back_arrow.png";
import OurApproachImage2 from "../images/left_section_images/ARM_Business_Material_A5_Rectangle_33_pattern@2x.png";
import activeFilter from "../Functions/activeFilter";
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

function SelectedProjectsSideFilter(props) {
  return (
    <div className="SelectedProjectsSide_Filters">
      <div className="SelectedProjectsSide_Header">Filter</div>
      <div
        onClick={e =>
          activeFilter(e, "SelectedProjectsSide_FilterItem", "filtActive")
        }
        className="SelectedProjectsSide_FilterItems"
      >
        <div className="SelectedProjectsSide_FilterItem All filtActive">
          All
        </div>
        <div className="SelectedProjectsSide_FilterItem AC">Art & Culture</div>
        <div className="SelectedProjectsSide_FilterItem Branding">Branding</div>
        <div className="SelectedProjectsSide_FilterItem Campaigns">
          Campaigns
        </div>
        <div className="SelectedProjectsSide_FilterItem Digital">Digital</div>
        <div className="SelectedProjectsSide_FilterItem Media">Media</div>
        <div className="SelectedProjectsSide_FilterItem Print">Print</div>
        <div className="SelectedProjectsSide_FilterItem Projects">Projects</div>
        <div className="SelectedProjectsSide_FilterItem Systems">Systems</div>
        <div className="SelectedProjectsSide_FilterItem Tools">Tools</div>
      </div>
    </div>
  );
}

function SelectedProjectsSideFilterProject(props) {
  return (
    <div className="SelectedProjectsSide_Filters">
      <div className="SelectedProjectsSide_Header">Filter</div>
      <div
        onClick={e =>
          activeFilter(e, "SelectedProjectsSide_FilterItem", "filtActiveIn")
        }
        className="SelectedProjectsSide_FilterItems_Inside"
      >
        <div className="SelectedProjectsSide_FilterItem All filtActiveIn">
          All
        </div>
        <div className="SelectedProjectsSide_FilterItem Previous">
          Previous Project
        </div>
        <div className="SelectedProjectsSide_FilterItem Next">Next Project</div>
      </div>
      <div className="selected_project_back_arrow_container">
        <Link to="/adefe_hq/selected_projects">
          <img className="back_arrow" src={back_arrow} alt="Back" />
        </Link>
      </div>
    </div>
  );
}

function ContactFormSideOptions(props) {
  return (
    <div className="ContactForm_SideOptions">
      <div className="ContactForm_SideOptions_Header">Projects</div>
      <div className="ContactForm_Options">
        <div className="ContactForm_Option Work_Together">Work Together</div>
        <div className="ContactForm_Option Bookings">
          Bookings & Consultation
        </div>
        <div className="ContactForm_Option Something_Else">Something Else</div>
      </div>
      <div className="selected_project_back_arrow_container">
        <Link to="/adefe_hq/contact">
          <img className="back_arrow" src={back_arrow} alt="Back" />
        </Link>
      </div>
    </div>
  );
}

class LeftSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: content_image,
      imageDisplay: "showImage",
      content: []
    };
  }
  componentDidMount(prevProps, prevState, snapshot) {
    // console.log(this.props, JSON.stringify(this.props.history));
    this.pageCheck(this.props.history.location);
    this.props.history.listen(location => {
      this.pageCheck(location);
    });
  }

  componentWillUnmount(prevProps, prevState, snapshot) {
    this.props.history.listen(location => {});
  }

  pageCheck(location) {
    let result;
    if (location.pathname.includes("we_want")) {
      result = <WeWantImages />;
    }
    if (location.pathname.includes("our_approach")) {
      result = <OurApproachImages />;
    }
    if (location.pathname === "/adefe_hq/selected_projects") {
      result = <SelectedProjectsSideFilter />;
    }
    if (location.pathname.match("/adefe_hq/selected_projects/.*")) {
      result = <SelectedProjectsSideFilterProject />;
    }
    if (location.pathname === "/adefe_hq/contact/form") {
      result = <ContactFormSideOptions />;
    }
    this.setState({
      content: result
    });
  }

  leftImages = [];
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
              <div id="contentLeftSection">{this.state.content}</div>
            )}
          />
        </div>
        <div id="LeftSectionMask"></div>
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
    window.addEventListener("scroll", event => {
      this._handleMomentumScroll(event);
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.splash !== this.props.splash) {
      this.setState({ splash: this.props.splash });
    }
  }

  _handleMomentumScroll(e) {
    const scrollConfig = Math.round(window.scrollY / 3);
    //console.log(window.scrollY);
    console.log("PRINT", document.getElementById("mainContent"));
    const mainContentStatus = document.getElementById("mainContent");
    //gap from top of page
    const contentOffsetTop = mainContentStatus.offsetTop;

    //height of the element
    const scrollHeight = Math.round(mainContentStatus.scrollHeight); // - contentOffsetTop; //- scrollConfig;

    const contentCover = document.getElementById("contentCover");

    //console.log(scrollConfig, scrollHeight, contentOffsetTop);

    //if the amount of pixels scrolled is less than the height of the element
    if (window.scrollY < scrollHeight) {
      mainContentStatus.style.transform = `translate3d(0, ${-scrollConfig}px, 0)`;

      //Calculate the overall height of the container
      //For some reason, adding 10vw to the calculation stops the jittering. Very strange - ask Anthony
      contentCover.style.height = `calc(${scrollHeight +
        contentOffsetTop / 3 -
        scrollConfig}px + 3vw)`;
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
            render={props => <Nav {...props} splash={this.props.splash} />}
          />
          <div id="contentCover" className={this.state.splash}>
            <div className={moved} id="mainContent">
              <Route path="/adefe_hq/" component={Overview} />
              <Route exact path="/adefe_hq/" component={WeWant} />
              <Route exact path="/adefe_hq/" component={ourApproach} />
              <Route path="/adefe_hq/" component={SelectedProjects} />
              <Route exact path="/adefe_hq/" component={About} />
              <Route exact path="/adefe_hq/" component={Contact} />
              <Route exact path="/adefe_hq/contact/form" component={Projects} />
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
          {/* <Footer
            stayInTouch={e => {
              this.stayInTouch();
            }}
          /> */}
        </div>
      </div>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: ""
    };
  }
  componentDidMount() {}
  //This changes the state to splash when the splash animation finishes and initialises the slide in animations.
  splashEnd() {
    this.setState({ splash: "splash" });
  }

  render() {
    return (
      <div id="mainContainer">
        <Router>
          <Route
            exact
            path="/adefe_hq"
            render={props => <Redirect to="/adefe_hq/" {...props} />}
          />

          <Route
            exact
            path="/adefe_hq/"
            render={props => (
              <Splash splashEnd={() => this.splashEnd()} {...props} />
            )}
          />
          <Route
            path="/adefe_hq"
            render={props => (
              <LeftSection {...props} splash={this.state.splash} />
            )}
          />
          <Route
            path="/adefe_hq"
            render={props => (
              <RightSection {...props} splash={this.state.splash} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default Main;
