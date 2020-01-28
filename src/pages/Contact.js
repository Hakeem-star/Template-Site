import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/pages/Contact.scss";

function Contact() {
  return (
    <div id="Contact_container">
      <div className="_head">
        <div className="about_us btn">About Us</div>
        <div className="about_us">We'd love to work together</div>
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

          <div className="dash"></div>
        </div>

        <div className="contact_lower_blurb">But, you can find us here.</div>

        <div className="contact_footer">
          <div className="socials">LOGOS</div>
          <div className="copyright"> Adefe Headquaters Ltd &copy; 2020</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
