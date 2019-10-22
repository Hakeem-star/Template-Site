import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let timeOut;
let i = 0;
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "",
      prevScroll: 0
    };
  }

  componentDidMount(prevProps, prevState, snapshot) {
    // if (prevState.prevScroll !== this.state.prevScroll) {

    window.clearTimeout(timeOut);
    this.timer();
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.show !== this.state.show) {
      window.clearTimeout(timeOut);
      this.timer();
    }
  }

  timer() {
    let bindTime = (scrollPos, prevScrollPos) => {
      i = 1;
      let test = this;
      timeOut = setTimeout(function() {
        if (timeOut) {
          window.clearTimeout(timeOut);
        }
        console.log(scrollPos, prevScrollPos);
        if (scrollPos > prevScrollPos) {
          //console.log(this);
          window.clearTimeout(timeOut);

          test.setState({ show: "DOWN", prevScroll: window.scrollY });
        } else if (scrollPos < prevScrollPos) {
          window.clearTimeout(test.timer);
          test.setState({ show: "UP", prevScroll: window.scrollY });
        }
        i = 0;
        window.clearTimeout(timeOut);
      }, 500);
    };

    document.addEventListener("scroll", e => {
      let scrollPos = window.scrollY;
      // console.log(e.eventPhase);

      let prevScrollPos = this.state.prevScroll;

      if (i === 0) {
        bindTime(scrollPos, prevScrollPos);
      }
    });
  }

  render() {
    return (
      <footer data-show={this.state.show} id="footer">
        <p>All content © Adefe Headquarters 2019</p>
        <input type="button" value="Stay in touch" />
      </footer>
    );
  }
}
export default Footer;
