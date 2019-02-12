import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div className="App">
        <div onClick={() => this.props.increaseCounter()}>Increase</div>
        <h2>{this.props.counter}</h2>
        <div
          style={{ marginTop: 20 }}
          onClick={() => this.props.decreaseCounter()}
        >
          Decrease
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
    decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
