import React, { Component } from "react";
import "./css/materialize.css";
import Header from "./components/header";
import Search from "./components/search";
import Users from "./components/users";
class App extends Component {
  state = {
    users: []
  };

  handleSubmit = user => {
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(data => {
        console.log(user);
        const users = [...this.state.users];
        users.push(data);
        this.setState({ users });
        console.log(data);
        console.log(this.state.users);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="divider" />
        <Search onSubmit={this.handleSubmit} />
        <Users users={this.state.users} />
      </React.Fragment>
    );
  }
}

export default App;
