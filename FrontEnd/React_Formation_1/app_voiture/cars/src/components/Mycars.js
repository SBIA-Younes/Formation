import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {

  render() {
    // console.log();
    return (
      <div>
        <h1>{this.props.title}</h1>

        <Car color="red">Ford</Car>
        <Car>Mercedes</Car>
        <Car color="green"></Car>
      </div>
    );
  }
}

export default Mycars;
