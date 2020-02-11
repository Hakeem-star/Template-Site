import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./css/selectedProjectsPreviewPane.scss";

// import image from "../project_pages/";
// let projectFolderLocation = "Arm";

function Previews(prop) {
  //const labels = ["Design / Strategy"]
  let images = Array(10)
    .fill("")
    .map((v, index) => {
      return (
        <div key={`Previews ${index}`} className="previews">
          <div className="_image clickable">
            <img
              src={`/project_pages/${prop.folder}/images/${index + 1}.jpg`}
              alt=""
            />
          </div>
          <p className="label clickable">Design / Strategy</p>
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
          <p className="_label clickable">Projects</p>
          <div className="_icon clickable"></div>
        </div>
        <div className="previews_container ">
          <div className="preview_scroller">
            <Previews />
          </div>
        </div>
        <div className="_cta">
          <Link to="/selected_projects">
            <input className="clickable" type="button" value="View all" />
            <div className="clickable"></div>
          </Link>
        </div>
      </div>
    );
  }
}

export default SelectedProjectsPreviewPane;
