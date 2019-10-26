import React from "react";

import DisplayPanel from "./DisplayPanel";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.scss";

class App extends React.Component {
  state = {
    total: 0,
    next: 0,
    operation: null
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="app">
        <DisplayPanel
          value={this.state.next * 1 || this.state.total * 1 || 0}
        />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
