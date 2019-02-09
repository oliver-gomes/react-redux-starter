import { createStore } from "redux";
import allReducers from "../reducers/index";

//store
const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    user: "Michael"
  },
  window.devToolsExtension && window.devToolsExtension()
);

export default store;
