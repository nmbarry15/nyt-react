import React from "react";
//import Background from "../images/coffee-and-newspaper.jpg";

const Header = props => (
  <div
    id="head"
    className="jumbotron bg-gradient-dark" /*style={{backgroundImage: `url(${Background})`}}*/
  >
    <h1 className="display-4">New York Times Article Search</h1>
    <hr className="my-4" />
    <p className="lead font-weight-bold">
      Search for and annotate articles of interest
    </p>
  </div>
);

export default Header;
