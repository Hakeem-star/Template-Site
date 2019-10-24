import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./main.scss";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Overview from "../components/content/Overview";
import WeWant from "../components/content/WeWant";
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
    let timeOut = setTimeout(function() {
      console.log("testOut");
      // document.addEventListener("scroll", () => {
      //   //console.log(window.scrollY > 500);

      //   if (window.scrollY > 500) {
      //     that.setState({ i: content_image });
      //   } else {
      //     that.setState({ i: "" });
      //   }
      // });
      window.clearTimeout(timeOut);
    }, 500);
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

function RightSection(props) {
  return (
    <div id="RightSection">
      <Header />
      <Nav />

      <div id="mainContent">
        <Route path="/" component={Overview} />
        <Route path="/" component={WeWant} />
      </div>
      <Footer />
    </div>
  );
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
