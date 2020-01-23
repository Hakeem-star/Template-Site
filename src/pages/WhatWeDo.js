import React, { Component } from "react";

class WhatWeDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg1_Transform: 1,
      bg2_Transform: 1
    };
  }

  componentDidMount() {
    const bg1 = document.getElementsByClassName("bg")[0];
    const bg2 = document.getElementsByClassName("bg")[1];
    let spl1 = window.getComputedStyle(bg1).transform.split(",");
    let spl2 = window.getComputedStyle(bg2).transform.split(",");

    this.setState({
      bg1_Transform: Number(spl1[spl1.length - 1].split(")")[0].trim()),
      bg2_Transform: Number(spl2[spl2.length - 1].split(")")[0].trim())
    });
    window.addEventListener("scroll", () => {
      this.parralax();
    });
    console.log("MOUNTED");
  }

  parralax() {
    let bg1 = this.state.bg1_Transform + window.scrollY / 5;
    let bg2 = this.state.bg2_Transform + window.scrollY / 6;

    console.log([
      bg1,
      this.state.bg1_Transform,
      this.state.bg2_Transform,
      window.scrollY / 3
    ]);
    document.getElementsByClassName(
      "bg"
    )[0].style.transform = `translate(0, ${bg1}px)`;

    document.getElementsByClassName(
      "bg"
    )[1].style.transform = `translate(0, ${bg2}px)`;
  }
  render() {
    return (
      <div id="what_we_do">
        <div className="bg _1"></div>
        <div className="bg _2"></div>

        <div className="_left"></div>
        <div className="_right">
          <div className="_head">
            <p>What we do</p>
          </div>
          <div className="_subHeadBlock top right">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="_content_container">
            <div className="_brand">
              <div className="_title">Brand Identity</div>
              <div className="_dash"></div>
              <div className="_article">
                Your brand is the cornerstone of your company. Our
                responsibility is to find unique and relevent truth about you,
                envelop ourselves in your story, and find the best way to
                henestly relate it to your audience. From the creation of the
                identity to the development of the brand system, our aim is to
                create a truly holistic brand experience. Once we've created
                your logo, all facets of your brand grow organically, eminating
                seamlessly and consistently through all pieces of collateral and
                touch-points.
              </div>
            </div>
            <div className="_products">
              <div className="_image">
                <img src="" alt="" />
              </div>
              <div className="_dash"></div>
              <div className="container">
                <div className="_title"> Products & Services</div>
                <div className="_article">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus iusto assumenda reiciendis minima at sint nulla beatae
                  tempora alias sequi ea deleniti culpa ipsum, officiis labore
                  corporis mollitia fuga voluptates deserunt. Illo ullam fugit
                  tempora alias exercitationem vel ratione molestiae!
                </div>
              </div>
            </div>
          </div>
          <div className="_subHeadBlock mid left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="_strategy">
            <div className="_title">Strategy</div>
            <div className="_dash"></div>
            <div className="_article">
              Consultation, thoughtful feedback, and redirection for existing
              brands. Maybe you have a stellar brand in place, but your brand
              extensions are without clear direction. We can help provide
              guidance and councel to ensure that all brand touch-points are
              faithfully executed across all mediums.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WhatWeDo;
