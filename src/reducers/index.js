import { combineReducers } from "redux";
import { occupiedReducer } from "./occupiedReducer";
import { showModalReducer } from "./showModalReducer";

export default combineReducers({
  occupied: occupiedReducer,
  showModal: showModalReducer
});
