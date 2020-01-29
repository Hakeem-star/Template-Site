import React, { Component } from "react";
import "../css/pages/Approach.scss";
function ourApproach() {
  return (
    <React.Fragment>
      <section id="our_Approach">
        <div className="header container">
          <div>
            <h2>Our Approach .</h2>
          </div>
          <div className="dash"></div>
          <div className="pageCounter">
            <p>01 / 05</p>
          </div>
        </div>
        <div className="subHeader">
          <h3>Define Blueprint</h3>
        </div>
        <section className="articles">
          <div className="right_arrow"></div>
          <article>
            <h4>The What</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae porro tempore aperiam sit ab odit totam neque facere
              quam cumque aspernatur rerum minus asperiores sapiente, obcaecati
              officia, molestiae quis dolorum?
            </p>
          </article>
          <article>
            <h4>Why we do it</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae porro tempore aperiam sit ab odit totam neque facere
              quam cumque aspernatur rerum minus asperiores sapiente, obcaecati
              officia, molestiae quis dolorum?
            </p>
          </article>
        </section>
      </section>
      <div className="blank"></div>
    </React.Fragment>
  );
}

export default ourApproach;
