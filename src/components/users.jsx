import React, { Component } from "react";
import User from "./user";
class Users extends Component {
  state = {};
  render() {
    return (
      <div className="row section container">
        {this.props.users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
