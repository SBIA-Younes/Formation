import React, { Component } from "react";
import Mycars from "./components/Mycars";
import "./App.css";

class App extends Component {
  state = {
    title: "Mon Catalogue Voiture",
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.title} />
      </div>
    );
  }
}

export default App;
