import React, { Component } from "react";
class Search extends Component {
  user = React.createRef();

  render() {
    return (
      <div className="row" style={{ margin: "10px" }}>
        <form
          action=""
          onSubmit={event => {
            event.preventDefault();
            const user = this.user.current.value;
            console.log(user);
            this.props.onSubmit(user);
          }}
          className="col s12 m12 l12"
        >
          <div className="row">
            <div className="col s2 m2 l2 center">
              <label htmlFor="searchBox">
                <i className="medium material-icons">search</i>
              </label>
            </div>
            <div className="col s10 m8 l8">
              <input
                type="text"
                ref={this.user}
                required
                placeholder="Enter user for search"
                defaultValue="franjorub"
              />
            </div>
            <div className="col m2 l2">
              <button className="btn waves-effect" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
