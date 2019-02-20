import { combineReducers } from "redux";

import tweets from "./tweets";
import ui from "./ui";

const rootReducer = combineReducers({
  tweets,
  ui
});

export default rootReducer;
