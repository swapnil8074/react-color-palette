import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";
export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  doCopy = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1200);
    });
  };
  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={background} onCopy={this.doCopy}>
        <div style={{ background: background }} className="ColorBox">
          <div
            style={{ background }}
            className={this.state.copied ? "copy-overlay show" : "copy-overlay"}
          ></div>
          <div className={this.state.copied ? "copy-msg show" : "copy-msg"}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
            <span className="see-more">More</span>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}
