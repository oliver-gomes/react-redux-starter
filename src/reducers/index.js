import productsReducer from "./productReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

export default allReducers;
