import React, { Component } from "react";

class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="partners">
        <div className="title">
          <p>Partners</p>
        </div>
        <div className="container">
          <div className="sub_detail">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            dignissimos, incidunt alias necessitatibus quae blanditiis veniam in
            ratione assumenda esse aliquam, soluta quisquam sit! Recusandae
            dignissimos molestiae accusamus iste voluptatum.
          </div>
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
    );
  }
}
export default Partners;
