import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Carousels.scss";

export class SliderDotsAuto extends React.Component {
  render() {
    var settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplaySpeed: 2000
    };

    return (
      <Slider {...settings}>
        {this.props.images.map((v, i, o) => {
          if (o.length === 1 && typeof o[0] === "number") {
            console.log(o, typeof o[0]);
            let temp = [];
            Array(v)
              .fill("")
              .forEach(e => {
                temp.push(<div className="_image"></div>);
              });
            //console.log(temp.join());
            return temp;
          } else {
            return (
              <div>
                <img src={v} alt="" />
              </div>
            );
          }
        })}
      </Slider>
    );
  }
}

export class SliderThreeView extends React.Component {
  render() {
    var settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {this.props.images.map((v, i, o) => {
          if (o.length === 1 && typeof o[0] === "number") {
            console.log(o, typeof o[0]);
            let temp = [];
            Array(v)
              .fill("")
              .forEach(e => {
                temp.push(<div className="_image"></div>);
              });
            //console.log(temp.join());
            return temp;
          } else {
            return (
              <div>
                <img src={v} alt="" />
              </div>
            );
          }
        })}
      </Slider>
    );
  }
}

export default SliderDotsAuto;
