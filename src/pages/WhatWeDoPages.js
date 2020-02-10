import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/WhatWeDo_Brand-Building.scss";
import WhatWeDopages from "./WhatWeDopages.json";
class WhatWeDoPages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  currentPage = WhatWeDopages[this.props.location.pathname.split("/")[2]];

  render() {
    console.log(this.currentPage);
    return (
      <div id="BrandBuilding_Container">
        <section className="_head_container">
          <div className="_head">
            <h1>{this.currentPage.title}</h1>
            <div className="dash"></div>
          </div>
          <div className="subName">
            <div className="cat_group">
              <Link to="/">
                <input type="button" value="" />
              </Link>
              <div className="category">
                <p>What we do</p>
              </div>
            </div>
            <article>{this.currentPage.subName_article}</article>
          </div>
        </section>
        <section className="showcase_container">
          <div className="position">
            <div className="showcase"></div>
            <div className="showcase_bottom">
              <div className="nav_circle_container">
                <div className="nav_circle"></div>
                <div className="nav_circle active"></div>
                <div className="nav_circle"></div>
              </div>
              <div className="label">
                <p>{this.currentPage.showcase_label}</p>
              </div>
            </div>
            <article className="content">
              <div>{this.currentPage.showcase_content[0]}</div>
              <div>{this.currentPage.showcase_content[1]}</div>
            </article>
          </div>
        </section>
        <section className="detail_cat_section">
          <div className="_title">
            <h3>Services</h3>
            <div className="dash"></div>
          </div>
          <div className="categories">
            <div>
              <div className="_header">
                {this.currentPage.services[0].title}
              </div>
              {/*map services[0].list[0] */}
              <ul>
                {this.currentPage.services[0].list.map(e => {
                  return <li>{e}</li>;
                })}

                {/* <li>Brand Experience</li>
                <li>Naming & Identity</li>
                <li>Positioning</li>
                <li>Messaging & Campaigns</li>
                <li>Roadmap & Go-to-market</li> */}
              </ul>
            </div>
            <div>
              <div className="_header">
                {this.currentPage.services[1].title}
              </div>
              <ul>
                {this.currentPage.services[1].list.map(e => {
                  return <li>{e}</li>;
                })}

                {/* 
                <li>Logo Design</li>
                <li>Brand Guide & Systems</li>
                <li>Creative Direction</li>
                <li>Marketing Collaterals</li> */}
              </ul>
            </div>

            <div>
              <div className="_header">
                {this.currentPage.services[2].title}
              </div>
              <ul>
                {this.currentPage.services[2].list.map(e => {
                  return <li>{e}</li>;
                })}

                {/* <li>Web & Mobile</li>
                <li>UX / UI Design</li>
                <li>App Development</li>
                <li>Event Experiences</li> */}
              </ul>
            </div>
          </div>
        </section>
        <section className="detail_section">
          <div className="detail _header">
            <div>
              <p>Building tomorrows brands - one that people can believe in</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis facilis maiores perspiciatis, pariatur illum velit
                vel excepturi, quaerat, quis eum tenetur molestias cum quia
                corporis quae a dolorem tempore facere.
              </p>
            </div>
          </div>
          <div className="detail">
            <div>
              <p>Brand Strategy</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis facilis maiores perspiciatis, pariatur illum velit
                vel excepturi, quaerat, quis eum tenetur molestias cum quia
                corporis quae a dolorem tempore facere.
              </p>
            </div>
          </div>
          <div className="detail">
            <div>
              <p>Research</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis facilis maiores perspiciatis, pariatur illum velit
                vel excepturi, quaerat, quis eum tenetur molestias cum quia
                corporis quae a dolorem tempore facere.
              </p>
            </div>
          </div>
          <div className="detail">
            <div>
              <p>Brand Design</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis facilis maiores perspiciatis, pariatur illum velit
                vel excepturi, quaerat, quis eum tenetur molestias cum quia
                corporis quae a dolorem tempore facere.
              </p>
            </div>
          </div>
          <div className="detail">
            <div>
              <p>Collaterals</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis facilis maiores perspiciatis, pariatur illum velit
                vel excepturi, quaerat, quis eum tenetur molestias cum quia
                corporis quae a dolorem tempore facere.
              </p>
            </div>
          </div>
          <div className="detail">
            <div>
              <p>Growth & Support</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis facilis maiores perspiciatis, pariatur illum velit
                vel excepturi, quaerat, quis eum tenetur molestias cum quia
                corporis quae a dolorem tempore facere.
              </p>
            </div>
          </div>
        </section>
        <section className="case_studies">
          <div className="preview_container">
            <div className="preview"></div>
            <div className="preview"></div>
            <div className="preview"></div>
          </div>
          <div className="pill_button" onClick>
            Case studies
          </div>
        </section>
        <section className="products_services_container">
          <div className="button"></div>
          <div className="dash"></div>
          <div>
            {/* the value of this is based on a calculation of the keys of the JSON object*/}
            <p>Products & Servcices.</p>
          </div>
        </section>
      </div>
    );
  }
}
export default WhatWeDoPages;
