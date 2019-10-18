import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  loading: loadingReducer
});
