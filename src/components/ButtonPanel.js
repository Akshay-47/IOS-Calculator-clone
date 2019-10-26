import React from "react";

import Button from "./Button";
import "./ButtonPanel.scss";

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.handleClick(buttonName);
  };

  render() {
    return (
      <div className="button-panel">
        <div>
          <Button name="AC" handleClick={this.handleClick} />
          <Button name="+/-" handleClick={this.handleClick} />
          <Button name="%" handleClick={this.handleClick} />
          <Button name="÷" orange handleClick={this.handleClick} />
        </div>
        <div>
          <Button name="7" handleClick={this.handleClick} />
          <Button name="8" handleClick={this.handleClick} />
          <Button name="9" handleClick={this.handleClick} />
          <Button name="X" orange handleClick={this.handleClick} />
        </div>
        <div>
          <Button name="4" handleClick={this.handleClick} />
          <Button name="5" handleClick={this.handleClick} />
          <Button name="6" handleClick={this.handleClick} />
          <Button name="-" orange handleClick={this.handleClick} />
        </div>
        <div>
          <Button name="1" handleClick={this.handleClick} />
          <Button name="2" handleClick={this.handleClick} />
          <Button name="3" handleClick={this.handleClick} />
          <Button name="+" orange handleClick={this.handleClick} />
        </div>
        <div>
          <Button name="0" wide handleClick={this.handleClick} />
          <Button name="." handleClick={this.handleClick} />
          <Button name="=" orange handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
