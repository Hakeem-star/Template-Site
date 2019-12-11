import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import trail from "../images/Icons/trail.png";
import plane from "../images/Icons/plane.png";

import "./css/newsletter.scss";
=======
import mail_sent from "../images/Icons/mail_sent.png";
import "../css/pages/newsletter.scss";
>>>>>>> 22d85f8... Moved files around

function CompletedNewsletter() {
  return <div className="ProjectsHead">Let's create progress together!</div>;
}

class StartNewsletter extends Component {
  render() {
    return "";
  }
}
function NewsletterFormPre(props) {
  return (
    <React.Fragment>
      <div className="newsletter_head">
        Subscribe to keep up to date. Anytime, anywhere.
      </div>
      <div className="newsletter_body">
        Our newsletter is full of special insights, content and beta versions of
        new products! and oh, don't worry we hate spams too.
      </div>
      <div className="newsletter_email_container">
        <input
          className="newsletter_email"
          type="text"
          name="email"
          placeholder="Enter your email address"
        />
        <input
          onClick={props.submitNewsletter}
          type="button"
          value="Sign Up"
          className="sign_up"
        />
      </div>
    </React.Fragment>
  );
}
function NewsletterFormPost(props) {
  return (
    <div className="NewsletterFormPost">
      <div className="airplane">
        <img className="_plane" src={plane} alt="plane" />
        <img className="_trail" src={trail} alt="mail_sent" />
      </div>
      <input
        onClick={props.submitNewsletter}
        type="button"
        value="Good to go!"
        className="good_to_go"
      />
    </div>
  );
}
let NewsletterForm = NewsletterFormPre;
class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.displayState !== this.props.displayState) {
      console.log(this.props);
      //this.props.history.push("/adefe_hq/newsletter");
    }
  }

  submitNewsletter(e) {
    //if we clicked on Sign up, make NewsletterForm the submitted form page
    if (e.target.className === "sign_up") {
      NewsletterForm = NewsletterFormPost;
      this.forceUpdate();
    }
    //if we clicked on good_to_go, close the form..
    if (e.target.className === "good_to_go") {
      this.props.closeNewsletter();
      //..then change back to the default form
      NewsletterForm = NewsletterFormPre;
    }
    //alert("hi");
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

          <NewsletterForm submitNewsletter={e => this.submitNewsletter(e)} />
        </div>
      </div>
    );
  }
}

export default Newsletter;
