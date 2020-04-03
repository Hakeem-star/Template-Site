import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/WhatWeDo.scss";
import { SliderDotsAuto } from "../components/Carousels";

class WhatWeDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg1_Transform: 1,
      bg2_Transform: 1
    };
    this.parralax = this.parralax.bind(this);
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
    window.addEventListener("scroll", this.parralax);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.parralax);
  }
  parralax() {
    let bg1 = this.state.bg1_Transform + window.scrollY / 7.5;
    let bg2 = this.state.bg2_Transform + window.scrollY / 9;

    // console.log([
    //   bg1,
    //   this.state.bg1_Transform,
    //   this.state.bg2_Transform,
    //   window.scrollY / 3
    // ]);
    document.getElementsByClassName(
      "bg"
    )[0].style.transform = `translate(0, ${bg1}px)`;

    document.getElementsByClassName(
      "bg"
    )[1].style.transform = `translate(0, ${bg2}px)`;

    // document.getElementsByClassName(
    //   "_subHeadBlock"
    // )[0].style.transform = `translate(0, ${bg1 / 2}px)`;
  }
  render() {
    return (
      <section id="what_we_do">
        <div className="bg _1">
          <SliderDotsAuto images={[3]} />
        </div>
        <div className="bg _2">
          <SliderDotsAuto images={[3]} />
        </div>

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
              <div className="_title">
                <Link to="/what_we_do/Brand_building">Brand Building</Link>
              </div>
              <div className="_dash"></div>
              <div className="_article">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam expedita, error ab maxime temporibus saepe fuga
                  odit, facere ipsa harum ducimus! Rem animi quam excepturi
                  voluptas voluptate in quis illo.
                </p>
                <Link to="/what_we_do/Brand_building">
                  <button className="button">Learn More</button>
                </Link>
              </div>
            </div>
            <div className="_products">
              {/* <div className="_image">
                <img src="" alt="" />
              </div> */}
              <SliderDotsAuto images={[3]} />
              <div className="_dash"></div>
              <div className="container">
                <div className="_title">
                  <Link to="/what_we_do/Products_and_Services">
                    Products & Services
                  </Link>
                </div>
                <div className="_article">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Natus iusto assumenda reiciendis minima at sint nulla beatae
                    tempora alias sequi ea deleniti culpa ipsum, officiis labore
                    corporis mollitia fuga voluptates deserunt. Illo ullam fugit
                    tempora alias exercitationem vel ratione molestiae!
                  </p>
                  <Link to="/what_we_do/Products_and_Services">
                    <button className="button">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="_subHeadBlock mid left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="_strategy">
            <div className="_title">
              <Link to="/what_we_do/Strategy">Strategy</Link>
            </div>
            <div className="_dash"></div>
            <div className="_article">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                iusto assumenda reiciendis minima at sint nulla beatae tempora
                alias sequi ea deleniti culpa ipsum, officiis labore corporis
                mollitia fuga voluptates deserunt. Illo ullam fugit tempora
                alias exercitationem vel ratione molestiae!
              </p>
              <Link to="/what_we_do/Strategy">
                <button className="button">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default WhatWeDo;
