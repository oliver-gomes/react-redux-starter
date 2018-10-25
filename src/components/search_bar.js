import React, { Component } from "react";

export default class SearchBar extends Component {
  onInputChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputChange} />
      </div>
    );
  }
}
