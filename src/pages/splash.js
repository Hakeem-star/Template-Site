import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import splash_logo from "../images/logos/Adefe_HQ_Full_Web_A2_Rectangle_5_pattern@2x.png";
import "./css/splash.scss";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designDisplay: "",
      SystemsDisplay: "none",
      contentDisplay: "flex",
      contentClass: "",
      imageDisplay: "none",
      splashClass: "none",
      splashDisplay: "flex"
    };
    this.skip = this.skip.bind(this);
  }
  componentDidMount() {
    console.log("mounted");
    let that = this;
    document.addEventListener("keydown", this.skip);
  }
  componentWillUnmount() {
    console.log("will unmounted");
  }
  animationDisplayController(e) {
    if (e.target.className === "design") {
      this.setState({ designDisplay: "none", SystemsDisplay: "block" });
    }
    if (e.target.className === "systems") {
      this.setState({ contentClass: "hide" });
    }
    if (e.target.className.includes("content")) {
      this.setState({ contentDisplay: "none", imageDisplay: "block" });
    }
    if (e.target.className === "logo") {
      this.setState({ splashClass: "hide" });
    }
    if (e.target.className.includes("Splash")) {
      this.setState({ splashDisplay: "none" });
      document.querySelector("body").style.overflow = "visible";
    }
  }
  skip(e) {
    console.log("PRESSED", e);

    this.setState(
      { splashClass: "skip" },
      document.removeEventListener("keydown", this.skip)
    );
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
          onAnimationEnd={e => {
            this.animationDisplayController(e);
          }}
          style={{ display: this.state.contentDisplay }}
          className={`content ${this.state.contentClass}`}
        >
          <div className="think">Think:</div>
          <div
            style={{ display: this.state.designDisplay }}
            className="design"
            onAnimationEnd={e => {
              this.animationDisplayController(e);
            }}
          >
            Design
          </div>
          <div
            onAnimationEnd={e => {
              this.animationDisplayController(e);
            }}
            style={{ display: this.state.SystemsDisplay }}
            className="systems"
          >
            Systems
          </div>
        </div>
        <div
          onAnimationEnd={e => {
            this.animationDisplayController(e);
          }}
          className="logo"
          style={{
            backgroundColor: "black",
            height: "20rem",
            display: this.state.imageDisplay
          }}
        ></div>
        {/* <img
          style={{ display: this.state.imageDisplay }}
          className="logo"
          src={splash_logo}
          alt=""
        /> */}
      </div>
    );
  }
}

export default Splash;
