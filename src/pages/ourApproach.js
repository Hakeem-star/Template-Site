import React, { Component } from "react";
import "./css/Approach.scss";
let content = [
  {
    subHeader: "Define Blueprint",
    what:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae.",
    why:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae."
  },
  {
    subHeader: "Explore purpose & values",
    what:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae.",
    why:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae."
  },
  {
    subHeader: "Planning and development",
    what:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae.",
    why:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae."
  },
  {
    subHeader: "Roadmap & Go-to-market",
    what:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae.",
    why:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae."
  },
  {
    subHeader: "Launch & support",
    what:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae.",
    why:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae."
  }
];

class ourApproach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: content[0],
      content_index: 0
    };
  }

  changeValues() {
    if (this.state.content_index !== content.length - 1) {
      this.setState({
        content: content[this.state.content_index + 1],
        content_index: this.state.content_index + 1
      });
    } else {
      this.setState({
        content: content[0],
        content_index: 0
      });
    }
  }

  render() {
    return (
      <section id="our_Approach">
        <div className="header container">
          <div>
            <h2>Our Approach .</h2>
          </div>
          <div className="dash"></div>
          <div className="pageCounter">
            <p>
              {this.state.content_index + 1} / <span> {content.length}</span>
            </p>
          </div>
        </div>
        <div className="subHeader">
          <h3>{this.state.content.subHeader}</h3>
        </div>
        <section className="articles">
          <div
            onClick={() => {
              this.changeValues();
            }}
            className="right_arrow"
          ></div>
          <article>
            <h4>The What</h4>
            <p>{this.state.content.what}</p>
          </article>
          <article>
            <h4>Why we do it</h4>
            <p>{this.state.content.why}</p>
          </article>
        </section>
      </section>
    );
  }
}

export default ourApproach;
