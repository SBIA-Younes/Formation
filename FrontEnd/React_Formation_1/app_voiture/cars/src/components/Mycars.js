import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voiture: [
      { name: "Ford", color: "red", year: 2000 },
      { name: "Mercedes", color: "black", year: 2010 },
      { name: "Peugeot", color: "green", year: 2018 },
    ],
  };
  addTenYears = () => {
    const updatedState = this.state.voiture.map((param) => {
      return (param.year -= 10);
    });

    this.setState({
      updatedState,
    });
  };
  render() {
    const years = new Date().getFullYear();

    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.addTenYears}> + 10ans</button>
        <Car
          color={this.state.voiture[0].color}
          year={years - this.state.voiture[0].year}
        >
          {this.state.voiture[0].name}
        </Car>
        <Car
          color={this.state.voiture[1].color}
          year={years - this.state.voiture[1].year}
        >
          {this.state.voiture[1].name}
        </Car>
        <Car
          color={this.state.voiture[2].color}
          year={years - this.state.voiture[2].year}
        >
          {this.state.voiture[2].name}
        </Car>
      </div>
    );
  }
}

export default Mycars;
