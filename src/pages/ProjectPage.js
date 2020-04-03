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
      <section className="billboard">
        <div className="labels_group">
          <button className="down_arrow"></button>
          <p className="label">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </section>
      <section className="intro">
        <div className="head">
          <div>
            <h1>Lorem, ipsum.</h1>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>Project</p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            velit, numquam ad consequuntur totam sunt iure sit maxime unde quos
            ea officia, sequi aspernatur consequatur?
          </p>
        </div>
        <div className="services">
          <p>Services</p>
          <div className="dash"></div>
        </div>
        <div className="services_list">
          <ul>
            <li>Organisation Transformation</li>
            <li>Market Research</li>
            <li>Service Design</li>
            <li>Roadmapping</li>
            <li>Innovation</li>
          </ul>
        </div>
      </section>
      <section className="top_showcase">
        <section className="header_section">
          <article>
            <div className="header">
              <h2 className="head">Strategy / Development</h2>
              <div className="dash"></div>
            </div>
            <div className="header_articles">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                veniam, deleniti aperiam explicabo numquam tenetur.
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                consequatur rerum, quisquam veniam odit incidunt, numquam
                voluptates deleniti eaque ab corrupti doloribus et suscipit
                veritatis nostrum vero id, quidem minus!
              </div>
            </div>
          </article>
        </section>
        <div className="showcase">
          <div className="left_showcase">
            <div></div>
            <button className="right_button"></button>
          </div>
          <div className="right_showcase"></div>
        </div>
        <section className="header_section">
          <article>
            <div className="header">
              <h2 className="head">Strategy / Development</h2>
              <div className="dash"></div>
            </div>
            <div className="header_articles">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                veniam, deleniti aperiam explicabo numquam tenetur.
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                consequatur rerum, quisquam veniam odit incidunt, numquam
                voluptates deleniti eaque ab corrupti doloribus et suscipit
                veritatis nostrum vero id, quidem minus!
              </div>
            </div>
          </article>
        </section>
        <section className="previews">
          <div className="preview_container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <button className="button_right"></button>
        </section>
      </section>
      <section className="blank"></section>
      <section className="mid_blurb">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime harum
          repudiandae iure a quae sapiente ad officia velit adipisci?
          Necessitatibus!
        </p>
      </section>
      <section className="header_section">
        <article>
          <div className="header">
            <h2 className="head">Strategy / Development</h2>
            <div className="dash"></div>
          </div>
          <div className="header_articles">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              veniam, deleniti aperiam explicabo numquam tenetur.
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              consequatur rerum, quisquam veniam odit incidunt, numquam
              voluptates deleniti eaque ab corrupti doloribus et suscipit
              veritatis nostrum vero id, quidem minus!
            </div>
          </div>
        </article>
      </section>
      <section className="long_previews"></section>
      <section className="header_section">
        <article>
          <div className="header">
            <h2 className="head">Strategy / Development</h2>
            <div className="dash"></div>
          </div>
          <div className="header_articles">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              veniam, deleniti aperiam explicabo numquam tenetur.
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              consequatur rerum, quisquam veniam odit incidunt, numquam
              voluptates deleniti eaque ab corrupti doloribus et suscipit
              veritatis nostrum vero id, quidem minus!
            </div>
          </div>
        </article>
      </section>
      <section className="single_Previews">
        <div className="preview_container">
          <div></div>
        </div>

        <button className="right_arrow"></button>
      </section>
      <section className="author">
        <article>
          <p className="quote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nemo
            aliquid hic fugiat repellendus libero, dolorem incidunt, quia sunt
            placeat, doloremque dolor aliquam distinctio nulla qui error
            reiciendis aspernatur facere.
          </p>

          <div className="dash"></div>
          <div className="details">
            <p>John Doe</p>
            <p>CEO & Founder</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </article>
      </section>
      <section className="header_section">
        <article>
          <div className="header">
            <h2 className="head">Strategy / Development</h2>
            <div className="dash"></div>
          </div>
          <div className="header_articles">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              veniam, deleniti aperiam explicabo numquam tenetur.
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              consequatur rerum, quisquam veniam odit incidunt, numquam
              voluptates deleniti eaque ab corrupti doloribus et suscipit
              veritatis nostrum vero id, quidem minus!
            </div>
          </div>
        </article>
      </section>
      <section className="single_Previews">
        <div className="preview_container">
          <div></div>
        </div>

        <button className="right_arrow"></button>
      </section>
      <section className="nextProject">
        <Link to="/selected_projects">
          <p className="next">Next Project</p>
          <button className="right_arrow"></button>
          <div className="next_preview">
            <div></div>
            <p>Strategy / Development</p>
          </div>
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
