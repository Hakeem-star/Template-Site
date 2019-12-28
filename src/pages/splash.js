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
      //hide allTextElement(className content) and show the image with imageDisplay
      this.setState({ allTextDisplay: "none", imageDisplay: "flex" });
    }

    //logo_div now animates it's opacity to show the logo
    console.log(e.target.className);
    if (e.target.className === "logo_div") {
      //We give logo_div a class of Slide, to trigger the mask animation
      this.setState({ logo_div: " slide", logoCont: "center" });
      //e.target.classList.add("slide");
    }

    if (e.target.className === "mask") {
      console.log("HERE");
      this.setState({ logo_div: " move", logoCont: "move" });
    }

    if (e.target.className === "logo_div slide") {
      console.log("HERE2");
      //Add "move" to the logo_div class and remove slide
      // e.target.classList.remove("slide");
      // e.target.classList.add("move");
      //We then change the class for the container to move
      this.setState({ logoCont: "move" });
    }

    //After the logo animation finishes...
    if (e.target.className === "logo") {
      //this.setState({ splashClass: "hide" });
      e.target.classList.add("shrink");
    }

    if (e.target.className === "logo_div_container move") {
      this.setState({ splashClass: "hide" });
      // console.log("HERE");
      //this.setState({ logoCont: "move" });
      //e.target.classList.add("move");
    }
    if (e.target.className.includes("Splash")) {
      //redirect to overview page
      this.props.history.push("/adefe_hq/overview");
      //remove the splash element from DOM
      this.setState({ splashDisplay: "none" });
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
          style={{ display: this.state.imageDisplay }}
        >
          <div className={`logo_div_cover`}>
            <div
              className={`logo_div${this.state.logo_div}`}
              onAnimationEnd={e => {
                this.animationDisplayController(e);
              }}
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
            <div
              onAnimationEnd={e => {
                this.animationDisplayController(e);
              }}
              className="mask"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
