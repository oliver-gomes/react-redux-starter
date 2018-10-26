import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          type="text"
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}
