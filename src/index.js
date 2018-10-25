import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyAVcG3VsNKCB-G6SjEE5TvRiiGKegfvH40";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
