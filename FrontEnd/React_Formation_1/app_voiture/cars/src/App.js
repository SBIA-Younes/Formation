import React, { Component } from "react";
import Mycars from "./components/Mycars";
import "./App.css";

class App extends Component {
  state = {
    title: "Mon Catalogue Voiture",
  };

  changeTitle = (e) => {
    this.setState({ title: "Mon Nouveau Titre" });
  };

  changeViaParrm = (title) => {
    this.setState({ title: title });
  };

  changeViaBind = (title) => {
    this.setState({ title: title });
  };

  changeViaInput = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.title} />
        <button onClick={this.changeTitle}>Change le titre</button>

        <button
          onClick={() => this.changeViaParrm("Change le Titre Via Parameters")}
        >
          Change Via Parameters
        </button>

        <button
          onClick={this.changeViaBind.bind(this, "change Titre Via Bind")}
        >
          Change Via Bind
        </button>

        <input
          type="text"
          onChange={this.changeViaInput}
          value={this.state.title}
        />
      </div>
    );
  }
}

export default App;
