import React, { Component } from "react";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

export default class Navbar extends Component {
  state = {
    format: "hex",
    open: false
  };

  // to handle select
  handleSelect = event => {
    let val = event.target.value;
    this.setState({ format: val, open: true });
    this.props.handleSelectedFormat(val);
    setTimeout(() => {
    this.setState({ open: false });
        
    }, 3000);
  };

  //   close notification
  closeNotification = () => {
    this.setState({ open: false });
  };

  render() {
    let { level, sliderChangeHandler } = this.props;
    let { format } = this.state;
    return (
      <nav className="Navbar">
        <div className="Logo">
          <a href="/">Palette Box</a>
        </div>
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={newLevel => {
              sliderChangeHandler(newLevel);
            }}
          />
        </div>
        <div className="SelectContainer">
          <Select value={format} onChange={this.handleSelect}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
        //   autoHideDuration={6000}
          message={<span id="message-id">Format Changed!</span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          action={[
            <IconButton onClick={this.closeNotification}>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </nav>
    );
  }
}
