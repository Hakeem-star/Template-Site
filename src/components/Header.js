import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: ""
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.splash !== this.props.splash) {
      this.setState({ splash: this.props.splash });
    }
  }

  render() {
    return (
      <header id="headerInfo" className={this.state.splash}>
        <div id="headerLeft">
          <div>
            <span className="headerKey">Say</span>
            <span className="headerValue">hello@lorem-hq.com</span>
          </div>
          <div>
            <span className="headerKey">Follow</span>
            <span className="headerValue">@lorem.hq</span>
          </div>
        </div>

        {/* <div id="headerRight">
          <span className="headerKey">Registered Office</span>
          <span className="headerValue">
            International House, 64 Nile Street, London, N1 7SR
          </span>
        </div> */}
      </header>
    );
  }
}
export default Header;
