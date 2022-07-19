import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  noCopy = (event) => {
    alert("Merci de ne  pas copier le texte");
    event.preventDefault();
  };

  addStyled = (e) => {
    console.log(e);
    e.target.classList.toggle("styled");
  };

  render() {
    // console.log();
    return (
      <div>
        <h1 onMouseOver={this.addStyled}>{this.props.title}</h1>

        <p onCopy={this.noCopy}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <Car color="red">Ford</Car>
        <Car>Mercedes</Car>
        <Car color="green"></Car>
      </div>
    );
  }
}

export default Mycars;
