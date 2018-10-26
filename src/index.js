import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyCXj2uFzyDkNtiicp0NHoK22I9BchUcN8M";

YTSearch({ key: API_KEY, term: "surfboards" }, function(data) {
  console.log(data);
});

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
