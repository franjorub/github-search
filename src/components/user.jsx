import React, { Component } from "react";
class User extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <div className="col s12 m4 l4 ">
        <div className="card">
          <div className="card-image">
            <img src={user.avatar_url} className="responsive-img" />
            <span className="card-title">{user.login}</span>
          </div>
          <div className="card-content">
            <p>{user.bio === null ? "No Bio Available" : user.bio}</p>
          </div>
          <div className="card-action">
            <a href="#">{user.html_url}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
