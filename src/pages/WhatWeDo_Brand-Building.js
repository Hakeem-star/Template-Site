import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/WhatWeDo_Brand-Building.scss";
class BrandBuilding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="BrandBuilding_Container">
        <section className="_head_container">
          <div className="_head">
            <h1>Brand building.</h1>
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
            <article>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              molestias nesciunt impedit nisi provident quia. Ipsum repellendus
              voluptatibus inventore doloribus, harum veniam suscipit
              accusantium nostrum quibusdam voluptatem eius architecto? Ipsam.
            </article>
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
                <p>Strategy/Development</p>
              </div>
            </div>
            <article className="content">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis magnam facere earum deleniti, placeat, alias recusandae
                repellat est quidem at excepturi necessitatibus, rerum beatae
                iusto qui! Sapiente, nemo optio.
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis magnam facere earum deleniti, placeat, alias recusandae
                repellat est quidem at excepturi necessitatibus, rerum beatae
                iusto qui! Sapiente, nemo optio. Repellendus laborum dolore
                voluptas velit architecto maiores, deserunt totam eaque saepe
                nostrum? Expedita voluptatum aperiam porro assumenda, hic
                accusantium ex ratione nulla sequi veritatis unde corporis
                eveniet quia commodi vitae temporibus!
              </div>
            </article>
          </div>
        </section>
        <section className="detail_cat_section">
          <div className="_title">
            <h3>Sevices</h3>
            <div className="dash"></div>
          </div>
          <div className="categories">
            <div>
              <div className="_header">Brand Strategy</div>
              <ul>
                <li>Brand Experience</li>
                <li>Naming & Identity</li>
                <li>Positioning</li>
                <li>Messaging & Campaigns</li>
                <li>Roadmap & Go-to-market</li>
              </ul>
            </div>
            <div>
              <div className="_header"> Brand Design</div>
              <ul>
                <li>Logo Design</li>
                <li>Brand Guide & Systems</li>
                <li>Creative Direction</li>
                <li>Marketing Collaterals</li>
              </ul>
            </div>

            <div>
              <div className="_header"> Digital Activation </div>
              <ul>
                <li>Web & Mobile</li>
                <li>UX / UI Design</li>
                <li>App Development</li>
                <li>Event Experiences</li>
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
              <p>Brand Strategy </p>
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
              <p>Research </p>
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
              <p>Brand Design </p>
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
              <p>Collaterals </p>
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
              <p>Growth & Support </p>
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
            <p>Products & Servcices.</p>
          </div>
        </section>
      </div>
    );
  }
}
export default BrandBuilding;
