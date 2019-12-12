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
      logoCont: ""
    };
    this.skip = this.skip.bind(this);
  }
  componentDidMount() {
    console.log("mounted");
    document.addEventListener("keydown", this.skip);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.skip);
  }
  animationDisplayController(e) {
    //After design dissapears...
    if (e.target.className === "design") {
      //hide design and show the systems text
      this.setState({ designDisplay: "none", SystemsDisplay: "block" });
    }
    //After systems dissapears...
    if (e.target.className === "systems") {
      //hide all text
      this.setState({ allTextClass: "hide" });
    }
    //After allText dissapears...
    if (e.target.className.includes("content")) {
      //hide allTextElement and show the image
      this.setState({ allTextDisplay: "none", imageDisplay: "block" });
    }
    //After the logo animation finishes...
    if (e.target.className === "logo") {
      //this.setState({ splashClass: "hide" });
      e.target.classList.add("shrink");
    }
    if (e.target.className === "logo_div") {
      //this.setState({ splashClass: "hide" });
      this.setState({ logoCont: "move" });
      e.target.classList.add("move");
    }

    if (e.target.className.includes("Splash")) {
      //this.props.history.push("/adefe_hq/overview");
      //this.setState({ splashDisplay: "none" });
      //document.querySelector("body").style.overflow = "visible";
    }
  }
  skip(e) {
    this.props.history.push("/adefe_hq/overview");
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
          onAnimationEnd={e => {
            this.animationDisplayController(e);
          }}
          style={{ display: this.state.allTextDisplay }}
          className={`content ${this.state.allTextClass}`}
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
        {/* <div
          onAnimationEnd={e => {
            this.animationDisplayController(e);
          }}
          className="logo"
          style={{
            backgroundColor: "black",
            height: "20rem",
            display: this.state.imageDisplay
          }}
        ></div> */}
        <div
          className={`logo_div_container ${this.state.logoCont}`}
          onAnimationEnd={e => {
            this.animationDisplayController(e);
          }}
        >
          <div
            className="logo_div"
            onAnimationEnd={e => {
              this.animationDisplayController(e);
            }}
            style={{ display: this.state.imageDisplay }}
          >
            <img
              onAnimationEnd={e => {
                this.animationDisplayController(e);
              }}
              className="logo"
              src={splash_logo}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
