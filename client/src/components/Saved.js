import React, { Component } from "react";

class Saved extends Component {
  state = {};
  render() {
    return (
      <div className="bg-light container rounded">
        <h2 className="text-center pt-3 display-5 font-weight-bold text-dark">
          Saved Articles
        </h2>
        <hr className="mb-3 mx-4" />
        <div className="resultContainer" />
      </div>
    );
  }
}

export default Saved;
