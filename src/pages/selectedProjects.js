import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import "./css/selectedProjects.scss";
// import image from "../project_pages/";
// let projectFolderLocation = "Arm";
export function SelectedProjectsSideFilter(props) {
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

  if (prop.pages != null) {
    parsed = prop.pages.pages;
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
          onClick={e => {
            e.target.classList.toggle("grow");
            setTimeout(function() {
              prop.history.push(`/selected_projects/${parsed[index]}`);
            }, 800);
          }}
          className="project_preview_container clickable"
        ></div>
      );
    });

  console.log(prop);
  return (
    <div className="selected_projects_container">
      {/*Need to create these divs and populate the urls based on the contents of a database */}
      <div id="projects_container">
        {prop.pages != null ? (
          projectPreviews
        ) : (
          <div className="loading">
            <p> Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}

//<Route path="/" component={Overview} />;

export class SelectedProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectPages: null
    };
  }
  async componentDidMount() {
    let page = async () => {
      let pages = await fetch("/pages.json");
      let pagesRes = await pages.json();
      this.setState({ projectPages: pagesRes });
    };
    page();
  }

  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default { SelectedProjectsSideFilter, SelectedProjects };
