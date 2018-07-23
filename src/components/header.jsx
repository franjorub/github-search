import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="section container">
        <h1>GitHub User Search</h1>
        <h3>@franjorub</h3>
        <p>
          <a href="https://github.com/franjorub/github-search" target="_blank">
            Link to the repo
          </a>
        </p>
      </div>
    );
  }
}

export default Header;
