import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ArmPage(prop) {
  return (
    <Route
      path="/adefe_hq/Selected_Projects/Arm/"
      render={() => (
        <div className="Arm_Container">
          <div className="Arm_Header_Container">
            <div className="Arm_Left">
              <div className="Arm_Left_head">Art Really Matters</div>
              <div className="Arm_Left_mid">Non Profit</div>
              <div className="Arm_Left_bottom">Project</div>
            </div>
            <div className="Arm_Right">
              Brand identity, Website and messaging for an art action group.
              Using art to start important dialogues and helping to raise funds
              for local community youth centres in the process.
            </div>
          </div>
          <div className="Selected_projects_images_Container">
            <div className="Selected_Projects_Image"></div>
            <div className="Selected_Projects_Image"></div>
            <div className="Selected_Projects_Image"></div>
            <div className="Selected_Projects_Image"></div>
            <div className="Selected_Projects_Image"></div>
          </div>
          <div className="nextProject">
            <div className="nextProject_Next">Next</div>
            <div className="nextProject_Project">Project</div>
          </div>
        </div>
      )}
    />
  );
}

function SelectedProjectsPreview(prop) {
  console.log(prop);
  return (
    <div id="selectedProjects_container">
      <div
        onClick={() => {
          prop.history.push("/adefe_hq/Selected_Projects/Arm");
          prop.projNav();
        }}
        className="project_preview_container"
      ></div>
      <div className="project_preview_container"></div>
      <div className="project_preview_container"></div>
      <div className="project_preview_container"></div>
      <div className="project_preview_container"></div>
    </div>
  );
}

//<Route path="/" component={Overview} />;

class SelectedProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  projNav(e) {
    console.log(e);
    document.getElementById("selectedProjects_container").style.display =
      "none";

    //this.setState{currentPage:""}
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/adefe_hq/"
          render={props => (
            <SelectedProjectsPreview
              {...props}
              projNav={e => this.projNav(e)}
            />
          )}
        />
        <ArmPage />
      </React.Fragment>
    );
  }
}

export default SelectedProjects;
