import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";


class Palette extends React.Component {
  state = {
    level: 500,
    selectedFormat: "hex"
  };

  // to handle slider change value
  sliderChange = level => {
    this.setState({ level });
  };

  handleSelectedFormat = val => {
    this.setState({ selectedFormat: val });
  };

  render() {
    let { colors } = this.props.palatte;
    let { level, selectedFormat } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox
        key={color[selectedFormat]}
        background={color[selectedFormat]}
        name={color.name}
      />
    ));

    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Navbar
          level={this.state.level}
          sliderChangeHandler={this.sliderChange}
          handleSelectedFormat={this.handleSelectedFormat}
        />

        <div className="Palette-colors">
          {/* color goes here */}
          {colorBoxes}
        </div>

        {/* footer goes here */}
      </div>
    );
  }
}

export default Palette;
