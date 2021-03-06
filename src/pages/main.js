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
import "./css/main.scss";
import Splash from "../pages/splash";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Overview from "./Overview";
import WeWant from "./WeWant";
import WhatWeDo from "./WhatWeDo";
import Partners from "./Partners";
import ourApproach from "./ourApproach";
import Values from "./Values";
import {
  SelectedProjectsSideFilter,
  SelectedProjects
} from "./selectedProjects";
import selectedProjectsPreviewPane from "../components/selectedProjectsPreviewPane";
import About from "./About";
import Contact from "./Contact";
import ProjectsForm from "./ProjectsForm";
import Newsletter from "../pages/newsletter";
import logo from "../images/logos/Adefe_HQ_Short_Web_A3_Rectangle_13_pattern@2x.png";
import OurApproachImage2 from "../images/left_section_images/ARM_Business_Material_A5_Rectangle_33_pattern@2x.png";
import activeFilter from "../Functions/activeFilter";
import componentPositions from "./functions/componentPositions";
import WhatWeDoPages from "./WhatWeDoPages";

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

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

class Logo extends Component {
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
      <div id="logo">
        <Link to="/">
          <img
            id="logo__Image"
            className="clickable"
            src={logo}
            alt="Adefe_HQ_Short_Web_A3_Rectangle_13_pattern"
          />
        </Link>
      </div>
    );
  }
}

// let this.counter = 0;
class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moved: 0,
      listenerDelayIndicator: 0,
      curEle: 0,
      elePosition: [0],
      newsletterDisplay: 0,
      mainContentMarginTop: 0,
      splash: "",
      aboutToggle: "hide"
    };
    // this.currentElementCalc = this.currentElementCalc.bind(this);
    // this.setState = this.setState.bind(this);
    // componentPositions = componentPositions
  }

  componentDidMount(prevProps, prevState, snapshot) {
    //height of the element
    //Listen to page change and rest page height on land - Need to remove listener and do it on prop change
    //need to see if it's better to change the height
    this.props.history.listen(location => {
      console.log(this.props.history);
      //Add to this so it remembers your position if you go back to a page
      //window.scrollTo({ top: 0, behaviour: "auto" });
      //Hides the About Container when the page changes
      let ele = document.getElementById("About_container");
      if (!ele.className.includes("hide")) {
        ele.classList.add("hide");
      }
    });
    // window.addEventListener("scroll", this._handleMomentumScroll);
    if ("ontouchstart" in document.documentElement) {
      document.querySelector(".mouse").style = { display: "none" };
    } else {
      document.addEventListener("mousemove", e => {
        try {
          this.moveMouse(e);
        } catch (error) {}
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleMomentumScroll);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.splash !== this.props.splash) {
      this.setState({ splash: this.props.splash });
    }
  }

  _handleMomentumScroll(e, contentContainer, containerCover) {
    //Calculate a 3rd of the scroll
    const scrollConfig = Math.round(window.scrollY / 3);
    //Select the contentContainer
    const mainContentStatus = document.getElementById("mainContent");

    //calculate the height of the element including paddings and margins
    const offsetHeight = mainContentStatus.offsetHeight; // - contentOffsetTop; //- scrollConfig;
    //Select the element containing the container for the content
    const contentCover = document.getElementById("contentCover");

    window.requestAnimationFrame(() => {
      //Translate the container of the content in the opposite direction as we scroll and with the css transition, it looks like it is settling into position
      mainContentStatus.style.transform = `translate3d(0, ${-scrollConfig}px, 0)`;
      //As the inner container is moving upwards, it will leave a big gap at the bottom of the page, so we need to change the containerCovers size based on the amount we've scrolled
      let topPart =
        window.innerHeight -
        (contentCover.offsetTop + mainContentStatus.offsetTop);

      let scrollablePortion =
        offsetHeight -
        //height of top portion not scrollable
        (offsetHeight -
          (window.innerHeight -
            (contentCover.offsetTop + mainContentStatus.offsetTop))) /
          3;

      contentCover.style.height = `calc(${offsetHeight - scrollConfig}px)`;
    });

    //Giving it a min Height to prevent the restriction when we navigate. This might be resolved once this effect is applied to a different container, per page
    // contentCover.style.minHeight = "100vh";
  }

  aboutToggle() {
    let ele = document.getElementById("About_container");
    ele.classList.toggle("hide");
    window.scrollTo({ left: 0, top: ele.offsetTop, behavior: "smooth" });
    // if (this.state.aboutToggle === "hide") {
    //   this.setState({ aboutToggle: null });
    // } else {
    //   this.setState({ aboutToggle: "hide" });
    // }
    //TODO
    //Scroll to the contact element after
  }
  stayInTouch() {
    console.log("Stay");
    let val = this.state.newsletterDisplay ? 0 : 1;
    this.setState({ newsletterDisplay: val });
  }
  moveMouse(e) {
    // e.stopPropagation();
    const mouse = { x: e.clientX, y: e.clientY };
    const mouseEle = document.getElementsByClassName("mouse")[0];
    const mouseEleTarget = e.target;
    //Check element type
    const isLinkTag = mouseEleTarget.tagName === "A";
    const isButtonTag = mouseEleTarget.tagName === "BUTTON";

    //Check element class
    const isClickActionTag = mouseEleTarget.className.includes("clickable");
    const isClickActionTagArrow = mouseEleTarget.className.includes("arrow");
    const isClickActionTagButton = mouseEleTarget.className.includes("button");
    const eleBound = mouseEle.getBoundingClientRect();
    // console.log(isLinkTag, isClickActionTag);
    // console.dir(mouseEleTarget);
    // mouseEle.style.transform = `translate3d(${-(eleBound.height / 2)}px, ${-(
    //   eleBound.width / 2
    // )}px, 0)`;
    // console.log(eleBound.height, eleBound.width);
    window.requestAnimationFrame(() => {
      if (
        isLinkTag ||
        isClickActionTag ||
        isClickActionTagArrow ||
        isClickActionTagButton ||
        isButtonTag
      ) {
        mouseEle.style.transform = `translate3d(${-(
          eleBound.height / 2
        )}px, ${-(eleBound.width / 2)}px, 0)`;
        mouseEle.style.width = "2vw";
        mouseEle.style.height = "2vw";
        e.stopPropagation();
      } else {
        mouseEle.style.transform = `translate3d(${-(
          eleBound.height / 2
        )}px, ${-(eleBound.width / 2)}px, 0)`;
        mouseEle.style.width = "1vw";
        mouseEle.style.height = "1vw";
      }

      mouseEle.style.top = `calc(${mouse.y}px)`;
      mouseEle.style.left = `calc(${mouse.x}px)`;
    });
    // else console.log(e);
  }
  render() {
    let moved = this.state.moved ? "moved" : "";

    return (
      <div id="RightSectionContainer">
        <div id="RightSection">
          <Route
            exact
            path="/"
            render={props => <Header splash={this.props.splash} />}
          />
          <Route
            path="/"
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
          <Route
            exact
            path="/selected_projects"
            component={SelectedProjectsSideFilter}
          />

          {/* giving this element a key that changes as the site navigates, makes react remount it again and fixes the scroll position issue,
          but is this the best solution? */}
          <div
            id="contentCover"
            //key={this.props.location.pathname}
            className={this.state.splash}
          >
            <main className={moved} id="mainContent">
              <Route exact path="/" component={Overview} />
              <Route exact path="/" component={selectedProjectsPreviewPane} />
              {/* <Route exact path="/adefe_hq/" component={WeWant} /> */}
              <Route exact path="/" render={props => <WhatWeDo {...props} />} />
              <Route exact path="/" component={ourApproach} />
              <Route exact path="/" component={Values} />
              <Route exact path="/" component={Partners} />
              <Route path="/selected_projects" component={SelectedProjects} />
              <Route exact path="/SubmitProject" component={ProjectsForm} />

              <Route
                path="/what_we_do/"
                render={props => <WhatWeDoPages {...props} />}
              />
              <Route path="/" render={props => <About {...props} />} />
              <Route
                path="/"
                render={props => (
                  <Contact
                    aboutToggle={() => {
                      this.aboutToggle();
                    }}
                    {...props}
                  />
                )}
              />
            </main>
          </div>
          {/* <Footer
            stayInTouch={e => {
              this.stayInTouch();
            }}
          /> */}
          <Route
            path="/"
            render={props => (
              <Newsletter
                displayState={this.state.newsletterDisplay}
                closeNewsletter={() => this.stayInTouch()}
                {...props}
              />
            )}
          />
        </div>
        <div className="mouse"></div>
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
          <Route path="/" render={props => <ScrollToTop {...props} />} />
          <Route path="/" render={props => <Logo {...props} />} />

          <Route
            exact
            path="/adefe_hq/"
            render={props => <Redirect to="/" {...props} />}
          />

          <Route
            exact
            path="/"
            render={props => (
              <SplashConditional
                splashDone={() => this.splashDone()}
                splash={this.state.splash}
                {...props}
              />
            )}
          />

          <Route path="/" render={props => <ContentContainer {...props} />} />
        </Router>
      </div>
    );
  }
}

export default Main;
