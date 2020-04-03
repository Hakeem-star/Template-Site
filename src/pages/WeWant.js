import React, { Component } from "react";
import content_image from "../images/left_section_images/ARM_Business_Material_A5_Rectangle_33_pattern@2x.png";

function OurApproachImages(props) {
  return (
    <div className="OurApproachImages">
      <div className="OurApproachImage1"></div>
      <div className="OurApproachImage2"></div>
      {/* <img src={OurApproachImage1} className="OurApproachImage1"/>
    <img src={OurApproachImage1} className="OurApproachImage2"/> */}
    </div>
  );
}
function WeWant() {
  return (
    <section id="we_want">
      <div className="_left">
        <OurApproachImages />
      </div>
      <div className="_right">
        <div className="_head">
          <p>We want&nbsp;&nbsp;.</p>
        </div>
        <div className="_container">
          <div className="_number">1.</div>
          <div className="_text">
            To be a part of change by creating work that push boundaries,
            enhances society and adds value in the daily lives of people.
          </div>
        </div>
        <div className="_container">
          <div className="_number">2.</div>
          <div className="_text">
            To make things more simple, intuitive, methodic and beautifully
            crafted.
          </div>
        </div>

        <div className="_container">
          <div className="_number">3.</div>
          <div className="_text">To make your presence felt.</div>
        </div>

        {/* <div className="_footer">
        Most of all, we want to empower people through{" "}
        <font>careful design thinking.</font>
      </div> */}
      </div>
    </section>
  );
}
export default WeWant;
