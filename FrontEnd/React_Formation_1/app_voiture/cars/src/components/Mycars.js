import { Component } from "react";
import Car from "./Cars";
import Welcome from "./Welcome";

class Mycars extends Component {
  state = {
    voiture: [
      { name: "Ford", year: "2000", color: "red" },
      { name: "Mercedes", year: "2010", color: "black" },
      { name: "Peugeot", year: "2022", color: "green" },
    ],
    title: "Mon Catalogue Voiture 2",
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
        <Welcome></Welcome>

        <h1>{this.state.title}</h1>

        <button onClick={this.addTenYears}> + 10 ans</button>

        {this.state.voiture.map(({ name, year, color }, index) => {
          return (
            <div key={index}>
              <Car
                year={() => {
                  let age = years - year;

                  if (age >= 1) {
                    age + "ans";
                  } else {
                    age + "an";
                  }
                }}
                color={color}
              >
                {name}
              </Car>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Mycars;
