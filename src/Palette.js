import React from "react";
import ColorBox from "./ColorBox";

class Palette extends React.Component {
  render() {
    const colorBoxes = this.props.palette.colors.map(color => (
      <ColorBox background={color} />
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
