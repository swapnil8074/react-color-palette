import React from "react";
import ColorBox from "./ColorBox";
import './Palette.css'

class Palette extends React.Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));

    return (
      <div className="Palette">
        {/* Navbar goes here */}

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
