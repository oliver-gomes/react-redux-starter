import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}
