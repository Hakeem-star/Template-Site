import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import "./css/selectedProjects.scss";
// import image from "../project_pages/";
// let projectFolderLocation = "Arm";
function SelectedProjectsSideFilter(props) {
  return (
    <div className="SelectedProjectsSide_Filters">
      <div className="SelectedProjectsSide_Header">Filter</div>
      <div
        // onClick={e =>
        //   activeFilter(e, "SelectedProjectsSide_FilterItem", "filtActive")
        // }
        className="SelectedProjectsSide_FilterItems"
      >
        <div className="SelectedProjectsSide_FilterItem All filtActive">
          All
        </div>
        <div className="SelectedProjectsSide_FilterItem AC">Brand Building</div>
        <div className="SelectedProjectsSide_FilterItem Branding">
          Products & Services
        </div>
        <div className="SelectedProjectsSide_FilterItem Campaigns">
          Strategy
        </div>
      </div>
    </div>
  );
}

function SelectedProjectsLanding(prop) {
  //const pages = JSON.parse(prop.pages).pages.length;
  let parsed = "";

  if (prop.pages.length > 0) {
    parsed = JSON.parse(prop.pages).pages;
    console.log(parsed);
  } else {
    console.error("Error with 'Pages' file");
  }

  const projectPreviews = Array(parsed.length)
    .fill("")
    .map((v, index) => {
      return (
        <div
          key={`${parsed[index]}`}
          style={{
            backgroundImage: `url("/project_pages/${parsed[index]}/images/1.jpg")`,
            backgroundSize: "cover"
          }}
          onClick={() => {
            prop.history.push(`/selected_projects/${parsed[index]}`);
          }}
          className="project_preview_container"
        ></div>
      );
    });

  console.log(prop);
  return (
    <React.Fragment>
      <SelectedProjectsSideFilter />
      {/*Need to create these divs and populate the urls based on the contents of a database */}
      <div id="selectedProjects_container">{projectPreviews}</div>
    </React.Fragment>
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
    let page = async () => {
      let pages = await fetch("/pages.json");
      let pagesRes = await pages.text();
      this.setState({ projectPages: pagesRes });
    };
    page();
  }

  render() {
    return (
      <div className="selected_projects_container">
        <Switch>
          <Route
            exact
            path={`/selected_projects`}
            render={prop => (
              <SelectedProjectsLanding
                {...prop}
                pages={this.state.projectPages}
              />
            )}
          />
          <Route
            path={`/selected_projects/`}
            render={prop => <ProjectPage {...prop} />}
          />
        </Switch>
      </div>
    );
  }
}

export default SelectedProjects;
