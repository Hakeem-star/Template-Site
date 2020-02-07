import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./css/ProjectPage.scss";

function ProjectPageSideFilterProject(props) {
  return (
    <div className="SelectedProjectsSide_Filters">
      <div className="SelectedProjectsSide_Header">Filter</div>
      <div
        // onClick={e =>
        //   activeFilter(e, "SelectedProjectsSide_FilterItem", "filtActiveIn")
        // }
        className="SelectedProjectsSide_FilterItems_Inside"
      >
        <div className="SelectedProjectsSide_FilterItem All filtActiveIn">
          All
        </div>
        <div className="SelectedProjectsSide_FilterItem Previous">
          Previous Project
        </div>
        <div className="SelectedProjectsSide_FilterItem Next">Next Project</div>
      </div>
      <div className="selected_project_back_arrow_container">
        <Link to="/selected_projects">
          <button className="back_arrow" alt="Back"></button>
        </Link>
      </div>
    </div>
  );
}

function SelectedProjectsImages(prop) {
  let images = Array(5)
    .fill("")
    .map((v, index) => {
      return (
        <div
          key={`Selected_Projects_Image ${index}`}
          className="Selected_Projects_Image"
        >
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
    <div className="ProjectPage_Container">
      <section className="billboard"></section>
      <section></section>
      <section></section>
      <section></section>
      <section>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime harum
        repudiandae iure a quae sapiente ad officia velit adipisci?
        Necessitatibus!
      </section>
      <section>
        <article>
          <div className="header">
            <h2 className="head">Strategy / Development</h2>
            <div className="dash"></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </article>
      </section>
      <section className="long_previews"></section>
      <section>
        <article>
          <div className="header">
            <h2 className="head">Strategy / Development</h2>
            <div className="dash"></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </article>
      </section>
      <section className="single_Previews">
        <div></div>
        <div>
          <button className="right_arrow"></button>
        </div>
      </section>
      <section>
        <article>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nemo
              aliquid hic fugiat repellendus libero, dolorem incidunt, quia sunt
              placeat, doloremque dolor aliquam distinctio nulla qui error
              reiciendis aspernatur facere.
            </p>
          </div>
          <div className="dash"></div>
          <div>
            <p>Sam Adefe</p>
          </div>
        </article>
      </section>
      <section>
        <article>
          <div className="header">
            <h2 className="head">Strategy / Development</h2>
            <div className="dash"></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </article>
      </section>
      <section></section>
      <section className="nextProject">
        <Link to="/selected_projects">
          <div className="next">Next Project</div>
          <button className="arrow"></button>
          <div className="next_preview"></div>
        </Link>
      </section>

      {/* <div className="ProjectPage_content_Container">
        <div className="ProjectPage_Header_Container">
          <div className="ProjectPage_Left">
            <div className="ProjectPage_Left_head">Art Really Matters</div>
            <div className="ProjectPage_Left_mid">Non Profit</div>
            <div className="ProjectPage_Left_bottom">Project</div>
          </div>
          <div className="ProjectPage_Right">
            Brand identity, Website and messaging for an art action group. Using
            art to start important dialogues and helping to raise funds for
            local community youth centres in the process.
          </div>
        </div>
        <div className="Selected_projects_images_Container">
          <SelectedProjectsImages folder={projectFolderLocation} />
        </div>
      </div> */}
    </div>
  );
}

export default ProjectPage;
