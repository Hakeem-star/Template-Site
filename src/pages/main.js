import React, { Component } from "react";
import "./main.css";
import logo from "../images/logos/Adefe_HQ_Short_Web_A3_Rectangle_13_pattern@2x.png";

function LeftSection(props) {
  return (
    <div id="LeftSection">
      <div>
        <img
          id="LeftSectionLogoImage"
          src={logo}
          alt="Adefe_HQ_Short_Web_A3_Rectangle_13_pattern"
        />
      </div>
    </div>
  );
}

function RightSection(props) {
  return (
    <div id="RightSection">
      <header id="headerInfo">
        <div id="headerLeft">
          <div>
            <span className="headerKey">Say</span>
            <span className="headerValue">hello@adefe-hq.com</span>
          </div>
          <div>
            <span className="headerKey">Follow</span>
            <span className="headerValue">@Adefe.hq</span>
          </div>
        </div>

        <div id="headerRight">
          <span className="headerKey">Registered Office</span>
          <span className="headerValue">
            International House, 64 Nile Street, London, N1 7SR
          </span>
        </div>
      </header>

      <nav id="pageNavigation">
        <div>
          <span className="nav nActive">Overview .</span>
          <span className="nav">We Want</span>
        </div>
        <div>
          <span className="nav">Our Approach .</span>

          <span className="nav">Selected Projects</span>
        </div>
        <div>
          <span className="nav">About .</span>
          <span className="nav">Contact</span>
        </div>
      </nav>

      <div id="mainContent">
        <div id="overview">
          <div className="overviewInner" id="overview_1">
            Adefe.Hq is a design & technlogy consultancy based in London, formed
            to explore future ideas and meaning communication.
          </div>

          <div className="overviewInner" id="overview_2">
            View some of our recent projects
          </div>
        </div>

        <div id="we_want">
          <ol>
            <li>
              To be a part of change by creating work that push boundaries,
              enhances society and adds value in the daily lives of people.
            </li>
            <li>
              To make things more simple, intuitive, methodic and beautifully
              crafted.
            </li>
          </ol>
        </div>
      </div>

      <div id="footer">
        <p>All content © Adefe Headquarters 2019</p>
        <input type="button" value="Stay in touch" />
      </div>
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
        <LeftSection />
        <RightSection />
      </div>
    );
  }
}

export default Main;
