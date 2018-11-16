import React, { Component } from "react";

class Results extends Component {
  state = {};
  render() {
    return (
      <div className="bg-light container rounded">
        <h2 className="text-center pt-3 display-5 font-weight-bold text-dark">
          Results
        </h2>
        <hr className="mb-3 mx-4" />
        <div className="resultContainer" />
      </div>
    );
  }
}

export default Results;
