import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

class Palette extends React.Component {
  state = {
    level: 500
  };

  sliderChange = level => {
    this.setState({ level });
  };

  render() {
    let { colors } = this.props.palatte;
    let { level } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox key={color.hex} background={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={newLevel => {
            this.sliderChange(newLevel);
          }}
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
