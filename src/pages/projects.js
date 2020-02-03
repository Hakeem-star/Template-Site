import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import customInputStyler from "../Functions/customInputStyler";
import "./css/projects.scss";

function WorkTogether() {
  return (
    <React.Fragment>
      <div className="form_row_container howDid">
        <div className="howDid">How did you find out about us?</div>
        <div className="choose">
          <div>Choose *</div>
          <div className="custom-select">
            <select name="referrers" id="referrers">
              <option value="Others">Others</option>
              <option value="Magazine">Magazine</option>
              <option value="Local community">Local community</option>
            </select>
          </div>
        </div>
      </div>
      <input
        type="text"
        name="Tell us"
        id="Tell_us"
        placeholder="Tell us about yout project *"
      />
    </React.Fragment>
  );
}

function Consultation() {
  return (
    <React.Fragment>
      <input
        type="text"
        name="Interested in"
        id="Interested_in"
        placeholder="Interested in. . ."
      />
    </React.Fragment>
  );
}

function SomethingElse() {
  return (
    <React.Fragment>
      <input
        type="text"
        name="Phone number"
        id="Phone_number"
        placeholder="Phone number"
      />

      <input
        type="text"
        name="Your message"
        id="Your_message"
        placeholder="Your message"
      />
    </React.Fragment>
  );
}

function ContactFormSideOptions(props) {
  return (
    <div className="ContactForm_SideOptions">
      <div className="ContactForm_SideOptions_Header">Projects</div>
      <div className="ContactForm_Options">
        <div className="ContactForm_Option Work_Together">Work Together</div>
        <div className="ContactForm_Option Bookings">
          Bookings & Consultation
        </div>
        <div className="ContactForm_Option Something_Else">Something Else</div>
      </div>
      <div className="selected_project_back_arrow_container">
        <Link to="/adefe_hq/">
          {/* <img className="back_arrow" src={back_arrow} alt="Back" /> */}
        </Link>
      </div>
    </div>
  );
}

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: <WorkTogether />
    };
    this.optionsChecker = this.optionsChecker.bind(this);
    //this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    customInputStyler();

    document
      .getElementsByClassName("select-items")[0]
      .addEventListener("click", this.optionsChecker);
  }
  clear() {
    document.getElementsByTagName("form")[0].reset();
  }
  submitForm(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    fetch("https://us-central1-adefehq.cloudfunctions.net/sendProject/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(Object.fromEntries(data))
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });

    console.log(JSON.stringify(Object.fromEntries(data)));
  }

  optionsChecker(e) {
    console.log(e.target.textContent);
    let selectedOption;
    if (e.target.textContent.includes("consultation")) {
      selectedOption = <Consultation />;
    }
    if (e.target.textContent.includes("Together")) {
      selectedOption = <WorkTogether />;
    }
    if (e.target.textContent.includes("Something")) {
      selectedOption = <SomethingElse />;
    }
    this.setState({ selectedOption });
  }
  render() {
    return (
      <div className="projects_form">
        <div className="_left">
          <ContactFormSideOptions />
        </div>
        <div className="_right">
          <div className="ProjectsHead">Let's create progress together!</div>
          <form onSubmit={e => this.submitForm(e)}>
            <div className="WorkTogether form_container">
              <div className="form_info">I'd like to talk about...</div>
              <div className="custom-select">
                <select name="Talk about" id="Talk_about">
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
              </div>
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

              {this.state.selectedOption}
              <div className="form_row_container form_footer">
                <input type="checkbox" name="I agree" id="agree" />{" "}
                <span className="checkmark"></span>
                <div className="form_footer_text">
                  I agree to recieve occasional Adefe.Hq newsletters containing
                  news and advice on creating personal and business progress via
                  digital tech.
                </div>
                <input type="submit" value="Submit form" />
              </div>
              <div onClick={() => this.clear()} className="clear">
                Clear form
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function Projects() {
  return <FormBuilder />;
}

export default Projects;
