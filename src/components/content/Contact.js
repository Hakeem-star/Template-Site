import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/Contact.scss";

function Contact() {
  return (
    <div id="Contact_container">
      <div className="getInTouch">Get in touch</div>
      <div className="contact_say_hi">
        <div className="say_hi">
          Say <span className="grey_text">Hi</span>
        </div>
        <div className="dash"></div>
        <div className="email">Hello@Adefe-hq.com</div>
        <input className="bwButton" type="button" value="Got a project?" />
      </div>
      <div className="contact_lower">
        <div className="contact_lower_blurb no_Actual">
          No ACTUAL office just as yet...
        </div>
        <div className="contact_lower_blurb">But, you can find us here.</div>
        <div>
          <div className="socials">Instagram</div>
          <div className="socials">Twitter</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
