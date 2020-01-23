import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../css/components/selectedProjectsPreviewPane.scss";

// import image from "../project_pages/";
// let projectFolderLocation = "Arm";

function Previews(prop) {
  let images = Array(10)
    .fill("")
    .map((v, index) => {
      return (
        <div key={`Previews ${index}`} className="previews">
          <img
            src={`/project_pages/${prop.folder}/images/${index + 1}.jpg`}
            alt=""
          />
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
      <div className="preview_pane_container">
        <div className="title">Selected Projects</div>
        <div className="previews_container">
          <div className="preview_scroller">
            <Previews />
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedProjectsPreviewPane;
