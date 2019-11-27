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

class Newsletter extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.displayState !== this.props.displayState) {
      console.log(this.props);
      //this.props.history.push("/adefe_hq/newsletter");
    }
  }
  render() {
    //console.log(this.props);
    let displayState = this.props.displayState ? "show" : "hide";
    return (
      <div className={`newsletter_container_overlay_BG ${displayState}`}>
        <div className="newsletter_container">
          <div className="newsletter_exit">
            <div
              onClick={this.props.closeNewsletter}
              className="newsletter_exit_symbol"
            >
              X
            </div>
          </div>

          <div className="newsletter_head">
            Subscribe to keep up to date. Anytime, anywhere.
          </div>
          <div className="newsletter_body">
            Our newsletter is full of special insights, content and beta
            versions of new products! and oh, don't worry we hate spams too.
          </div>
          <div className="newsletter_email_container">
            <input
              className="newsletter_email"
              type="text"
              name="email"
              placeholder="Enter your email address"
            />
            <input type="button" value="Sign Up" className="sign_up" />
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
