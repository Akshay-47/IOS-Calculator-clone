import React from "react";

import "./Button.scss";

class Button extends React.Component {
  handleClick = () => {
    this.props.handleClick(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : ""
    ];
    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
