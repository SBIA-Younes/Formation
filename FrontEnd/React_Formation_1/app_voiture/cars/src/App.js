import { Component } from "react";
import { Mycars } from "./components/Mycars";
import "./App.css";

class App extends Component {
  state = {
    title: "Mon Catalogue Voiture 2",
    color: "green",
  };

  render() {
    return (
      <div className="App">
        <Mycars color={this.state.color} title={this.state.title} />
      </div>
    );
  }
}

export default App;
