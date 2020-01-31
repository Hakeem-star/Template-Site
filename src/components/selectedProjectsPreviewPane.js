import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../css/components/selectedProjectsPreviewPane.scss";

// import image from "../project_pages/";
// let projectFolderLocation = "Arm";

function Previews(prop) {
  //const labels = ["Design / Strategy"]
  let images = Array(10)
    .fill("")
    .map((v, index) => {
      return (
        <div key={`Previews ${index}`} className="previews">
          <div className="_image">
            <img
              src={`/project_pages/${prop.folder}/images/${index + 1}.jpg`}
              alt=""
            />
          </div>
          <p className="label">Design / Strategy</p>
        </div>
      );
    });
  return images;
}

class SelectedProjectsPreviewPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectPages: ""
    };
  }

  render() {
    return (
      <div id="preview_pane_container">
        <div className="_head">
          <p className="_label">Projects</p>
          <div className="_icon"></div>
        </div>
        <div className="previews_container">
          <div className="preview_scroller">
            <Previews />
          </div>
        </div>
        <div className="_cta">
          <Link to="/adefe_hq/selected_projects">
            <input type="button" value="View all" />
            <div></div>
          </Link>
        </div>
      </div>
    );
  }
}

export default SelectedProjectsPreviewPane;
