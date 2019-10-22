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

function LeftSection(props) {
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
        path="/we_want"
        render={() => (
          <div id="contentLeftSection">
            <img
              id="contentLeftSectionImage"
              src={content_image}
              alt="description"
            />
          </div>
        )}
      />
    </div>
  );
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
