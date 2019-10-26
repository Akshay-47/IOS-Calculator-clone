import React from "react";

import "./DisplayPanel.scss";

class DisplayPanel extends React.Component {
  render() {
    return (
      <div className="display-panel">
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default DisplayPanel;
