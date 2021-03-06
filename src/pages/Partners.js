import React, { Component } from "react";

class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="partners">
        <div className="container">
          <div className="title">
            <h3>Partners</h3>
          </div>
          <div className="sub_detail">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              dignissimos, incidunt alias necessitatibus quae blanditiis veniam
              in ratione assumenda esse aliquam, soluta quisquam sit! Recusandae
              dignissimos molestiae accusamus iste voluptatum.
            </p>
          </div>
          <div className="labelContainer">
            <div className="_labels">
              <p className="sales">Sales</p> <div className="_window"></div>
            </div>
            <div className="_labels">
              <p className="pr">Pr & Marketing</p>
              <div className="_window"></div>
            </div>
            <div className="_labels">
              <p className="video">Video & Animation</p>
              <div className="_window"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Partners;
