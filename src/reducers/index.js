import { combineReducers } from "redux";

import { occupiedReducer } from "./occupiedReducer";

export default combineReducers({
  occupied: occupiedReducer
});
