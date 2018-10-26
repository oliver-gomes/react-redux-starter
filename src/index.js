import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
const API_KEY = "AIzaSyCXj2uFzyDkNtiicp0NHoK22I9BchUcN8M";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
