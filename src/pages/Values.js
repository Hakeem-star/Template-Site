import React, { Component } from "react";
import "./css/Values.scss";
let content = [
  {
    _title: "Build for Humanity",
    value:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae."
  },
  {
    _title: "Always diversify",
    value:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae."
  },
  {
    _title: "Enable commercial & Social responsibility",
    value:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae."
  },
  {
    _title: "Induce independence",
    value:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae."
  },
  {
    _title: "Purposeful Growth",
    value:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laborum distinctio. Ut nisi, odio accusamus repellat saepe facilis consequatur vel nostrum aut iste, optio neque sit, sunt error corrupti. Quae."
  }
];
class Values extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: content[0],
      content_index: 0
    };
  }

  changeValues() {
    // console.log(this.state.content_index, content.length);
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
      <React.Fragment>
        <section className="Values">
          <div className="_container">
            <div className="_top">
              <div className="title_label">
                <h4>Our Values</h4>
              </div>
              <div className="_title">
                <h2>{this.state.content._title}</h2>
              </div>
              <div>
                <input
                  onClick={() => {
                    this.changeValues();
                  }}
                  className="square_button clickable"
                  type="button"
                  value=""
                />
              </div>
            </div>
            <article className="_bottom">
              <div className="numbering">
                <p>{`0${this.state.content_index + 1}.`}</p>
              </div>
              <div className="value">
                <p>{this.state.content.value}</p>
              </div>
            </article>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Values;
