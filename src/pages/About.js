import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import top_curve from "../images/Icons/top_curve.png";
import bottom_curve from "../images/Icons/bottom_curve.png";
import "./css/About.scss";

function About(props) {
  return (
    <section id="About_container" className="hide">
      <div className="black_bg"></div>
      <section className="founders">
        <div className="co-founder">
          <div>
            <p>
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              ratione ea. "
            </p>
            <div></div>
            <p className="name">Jack Doe</p>
            <p className="title">Co-Founder</p>
          </div>
        </div>
        <div className="founder">
          <div>
            <p>
              " Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum, sit vel. "
            </p>
            <div></div>
            <p className="name">Jon Doe</p> <p className="title">Founder</p>
          </div>
        </div>
      </section>
      <article className="about">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
          possimus eos! Cupiditate velit doloribus at amet. Suscipit hic cum ad
          asperiores dignissimos nulla? Veritatis nihil voluptatem odit dolor
          accusamus quis.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque!
          <span>lorem15</span>
        </p>
      </article>
    </section>
  );
}

export default About;
