import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import splash_logo from "../images/logos/Adefe_HQ_Full_Web_A2_Rectangle_5_pattern@2x.png";
import "../css/pages/splash.scss";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designDisplay: "",
      SystemsDisplay: "none",
      allTextDisplay: "flex",
      allTextClass: "",
      imageDisplay: "none",
      splashClass: "none",
      splashDisplay: "flex",
      logoCont: "",
      count: 0,
      logo_div: "",
      mask_phase: "",
      containerToCenter: ""
    };
    this.skip = this.skip.bind(this);
  }
  componentDidMount() {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    document.addEventListener("keydown", this.skip);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.skip);
  }

  animationDisplayController(e) {
    //After design dissapears...

    //After systems dissapears...
    if (e.target.className === "purpose") {
      //hide all text
      this.setState({ allTextClass: "hide" });
    }

    //After allText dissapears...
    if (e.target.className.includes("content")) {
      //hide allTextElement(className content) and show the image with imageDisplay
      // //logo_div now animates it's opacity to show the logo
      this.setState({ allTextDisplay: "none", imageDisplay: "flex" });
    }

    //After the logo animation finishes...
    if (e.target.className === "logo" && e.animationName === "move") {
      console.log(e.animationName);
      this.setState({ splashClass: "hide" });
    }

    // if (e.target.className === "logo_div_container move") {
    //   //Hide the splash element
    //   // this.setState({ splashClass: "hide" });
    // }
    if (e.target.className.includes("Splash")) {
      //redirect to overview page
      //  this.props.history.push("/adefe_hq/");
      //  this.props.splashEnd();
      //remove the splash element from DOM
      document.getElementsByTagName("body")[0].style.overflowY = "scroll";
      this.setState({ splashDisplay: "none" });
      //document.querySelector("body").style.overflow = "visible";
    }
  }
  skip(e) {
    //this.props.history.push("/adefe_hq/");
    this.setState({ splashClass: "skip" });
  }
  render() {
    return (
      <div
        onClick={e => this.skip()}
        onKeyDown={e => this.skip()}
        onAnimationEnd={e => {
          this.animationDisplayController(e);
        }}
        style={{ display: this.state.splashDisplay }}
        className={`Splash ${this.state.splashClass}`}
      >
        <div
          style={{ display: this.state.allTextDisplay }}
          className={`content ${this.state.allTextClass}`}
        >
          <div className="think">Think:</div>
          <div className="flick_container">
            <div className="systems">Systems</div>
            <div className="design">Design</div>

            <div
              onAnimationEnd={e => {
                this.animationDisplayController(e);
              }}
              className="purpose"
            >
              Purpose
            </div>
          </div>
        </div>
        <div
          onAnimationEnd={e => {
            this.animationDisplayController(e);
          }}
          className="logo"
          style={{
            // backgroundColor: "black",
            // height: "20rem",
            display: this.state.imageDisplay
          }}
        ></div>
      </div>
    );
  }
}

export default Splash;
