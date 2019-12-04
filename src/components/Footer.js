import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./content/css/Footer.scss";
let timeOut;
let i = 0;
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "DOWN",
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

        if (scrollPos > prevScrollPos) {
          //console.log(this);
          //This means they probably scrolled down
          //Reset the timeout so another event is not recognised until the timeout is cleared
          window.clearTimeout(timeOut);
          //Change state so the CSS can be refreshed and animated
          test.setState({ show: "DOWN", prevScroll: window.scrollY });
        } else if (scrollPos < prevScrollPos) {
          //This means they probably scrolled up
          //Reset the timeout so another event is not recognised until the timeout is cleared
          window.clearTimeout(test.timer);
          //Change state so the CSS can be refreshed and animated
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
        //If I is 0, which means the timer just cleared, restart the timer(maybe using setInterval makese more sense)
        bindTime(scrollPos, prevScrollPos);
      }
    });
  }

  render() {
    return (
      <footer data-show={this.state.show} id="footer">
        <p>All content © Adefe Headquarters 2019</p>
        <input
          onClick={this.props.stayInTouch}
          type="button"
          value="Stay in touch"
        />
      </footer>
    );
  }
}
export default Footer;
