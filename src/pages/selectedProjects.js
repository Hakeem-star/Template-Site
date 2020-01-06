import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import image from "../project_pages/";
// let projectFolderLocation = "Arm";
function SelectedProjectsImages(prop) {
  let images = Array(5)
    .fill("")
    .map((v, index) => {
      return (
        <div className="Selected_Projects_Image">
          <img
            src={`/project_pages/${prop.folder}/images/${index + 1}.jpg`}
            alt=""
          />
        </div>
      );
    });
  return images;
}
function ProjectPage(prop) {
  let projectFolderLocation = prop.location.pathname.split("/")[3] || "Arm";
  console.log(projectFolderLocation);

  //Need to use the prop to update the location of the page
  //projectFolderLocation = prop.ProjectPage
  return (
    <div className="Arm_Container">
      <div className="Arm_Header_Container">
        <div className="Arm_Left">
          <div className="Arm_Left_head">Art Really Matters</div>
          <div className="Arm_Left_mid">Non Profit</div>
          <div className="Arm_Left_bottom">Project</div>
        </div>
        <div className="Arm_Right">
          Brand identity, Website and messaging for an art action group. Using
          art to start important dialogues and helping to raise funds for local
          community youth centres in the process.
        </div>
      </div>
      <div className="Selected_projects_images_Container">
        <SelectedProjectsImages folder={projectFolderLocation} />
      </div>
      <div className="nextProject">
        <div className="nextProject_Next">Next</div>
        <div className="nextProject_Project">Project</div>
      </div>
    </div>
  );
}

function SelectedProjectsPreview(prop) {
  //const pages = JSON.parse(prop.pages).pages.length;
  console.log(JSON.parse(prop.pages));
  // const projectPreviews = Array(5)
  //   .fill("")
  //   .map();

  console.log(prop);
  return (
    //Need to create these divs and populate the urls based on the contents of a database
    <div id="selectedProjects_container">
      <div
        onClick={() => {
          prop.history.push("/adefe_hq/selected_projects/Arm");
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
    this.state = {
      projectPages: ""
    };
  }
  async componentDidMount() {
    let pages = await fetch("/pages.json");
    let pagesRes = await pages.text();
    this.setState({ projectPages: pagesRes });
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            exact
            path={`/adefe_hq/selected_projects/`}
            render={prop => (
              <SelectedProjectsPreview
                {...prop}
                pages={this.state.projectPages}
              />
            )}
          />
          <Route
            path={`/adefe_hq/selected_projects/`}
            render={prop => <ProjectPage {...prop} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default SelectedProjects;
