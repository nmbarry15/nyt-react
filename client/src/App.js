import React, { Component } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import Saved from "./components/Saved";
import SearchBox from "./components/SearchBox";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container p-5">
        <Header />
        <SearchBox />
        <Results />
        <Saved />
      </div>
    );
  }
}

export default App;
