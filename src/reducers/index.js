import { combineReducers } from "redux";
import { occupiedReducer } from "./occupiedReducer";
import { showModalReducer } from "./showModalReducer";
import { meetingReducer } from "./meetingReducer";

export default combineReducers({
  occupied: occupiedReducer,
  meetings: meetingReducer,
  showModal: showModalReducer
});
