import { ADD_TIME, ADD_MEETING } from "../actions/types";
import _ from "lodash";

export const occupiedReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TIME:
      return [
        ...state,
        {
          title: action.payload.title,
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
          step: action.payload.step,
          day: action.payload.day,
          time: []
        }
      ];

    default:
      return state;
  }
};
