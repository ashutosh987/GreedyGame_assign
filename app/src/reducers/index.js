import { combineReducers } from "redux";
import company from "./company";
import revenue from "./revenue";

export default combineReducers({
  company,
  revenue,
});
