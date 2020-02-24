import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/Contact.scss";

function Contact(props) {
  return (
    <footer id="Contact_container">
      <div className="_head">
        <button onClick={props.aboutToggle} className="about_us button">
          About Us
        </button>
        <p className="about_us">We'd love to work together</p>
      </div>

      <div className="contact">
        <div className="info">
          <p className="head">Info</p>
          <p className="body">Company No. 11632821</p>
          <p className="body">VAT: 307 4302 37</p>
        </div>

        <div className="say_hi">
          <p className="head">Say Hi</p>
          <p className="body">General Enquiry</p>
          <p className="body">Hello@adefehq.com</p>
        </div>

        <div className="project">
          <p className="head">Project</p>
          <p className="body">Start a new project</p>
          <p className="body">Projects@adefehq.com</p>
        </div>
      </div>

      <div className="_lower">
        <div className="blurb_container">
          <div className="no_Actual">No ACTUAL office just as yet...</div>
        </div>

        <div className="contact_lower_blurb">But, you can find us here.</div>

        <div className="contact_footer">
          <div className="socials">
            <div id="insta"></div>
            <div id="linkedIn"></div>
            <div id="bball"></div>
            <div id="pinterest"></div>
          </div>
          <div className="copyright"> Adefe Headquaters Ltd &copy; 2020</div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
