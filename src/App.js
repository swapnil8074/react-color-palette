import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";

function App() {
  return (
    <div className="App">
      <Palette palatte={generatePalette(seedColors[5])} />
    </div>
  );
}

export default App;
