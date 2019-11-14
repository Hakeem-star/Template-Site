import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/newsletter.scss";

function CompletedNewsletter() {
  return <div className="ProjectsHead">Let's create progress together!</div>;
}

class StartNewsletter extends Component {
  render() {
    return "";
  }
}

function Newsletter(props) {
  console.log(props);
  let displayState = props.displayState ? "show" : "hide";
  return (
    <div className={`newsletter_container_overlay_BG ${displayState}`}>
      <div className="newsletter_container"></div>
    </div>
  );
}

export default Newsletter;
