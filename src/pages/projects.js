import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/projects.scss";

function ProjectsHead() {
  return <div className="ProjectsHead">Let's create progress together!</div>;
}

class WorkTogether extends Component {
  render() {
    return (
      <div className="form_container">
        <div className="form_info">I'd like to talk about...</div>
        <select name="Talk about" id="Talk about">
          <option
            className="dropDown_option"
            value="Working Together on a project"
          >
            Working Together on a project
          </option>
          <option
            className="dropDown_option"
            value="Book a consultation / education"
          >
            Book a consultation / education
          </option>
          <option className="dropDown_option" value="Something else">
            Something else
          </option>
        </select>
        <div className="name_company form_row_container">
          <input
            type="text"
            name="Your name"
            id="name"
            placeholder="Your name *"
          />
          <input
            type="text"
            name="Company name"
            id="company_name"
            placeholder="Name of your company *"
          />
        </div>

        <input
          type="email"
          name="Email address"
          id="email"
          placeholder="Email address *"
        />
        <div className="form_row_container">
          <div>How did you find out about us?</div>
          <div>
            <div>Choose *</div>
            <select name="referrers" id="referrers">
              <option value="Magazine">Magazine</option>
              <option value="Local community">Local community</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <input
          type="text"
          name="Tell us"
          id="Tell_us"
          placeholder="Tell us about yout project *"
        />
        <div className="form_row_container">
          <input type="checkbox" name="I agree" id="agree" />
          <div>
            I agree to recieve occasional Adefe.Hq newsletters containing news
            and advice on creating personal and business progress via digital
            tech.
          </div>
          <input type="button" value="Submit form" />
          <div>Clear form</div>
        </div>
      </div>
    );
  }
}

function Projects() {
  return (
    <React.Fragment>
      <ProjectsHead />
      <WorkTogether />
    </React.Fragment>
  );
}

export default Projects;
