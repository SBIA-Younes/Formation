import { Component } from "react";
import { wrapper } from "./Wrapper";
import { MyHeader } from "./MyHeader";
import Car from "./Cars";

export class Mycars extends Component {
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
    // console.log(this.props);
    const { title, color } = this.props;

    const years = new Date().getFullYear();

    const MyTitle = MyHeader({ color, title });
    return (
      <div>
        {wrapper(MyTitle)}

        <button onClick={this.addTenYears}> + 10 ans</button>
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
