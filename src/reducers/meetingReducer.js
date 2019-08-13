import { ADD_MEETING, ADD_TIME } from "../actions/types";

export const meetingReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_TIME:
      return {
        ...state,
        [action.payload.day]: { day: action.payload.day, time: [] }
      };

    case ADD_MEETING:
      return {
        ...state,
        [action.payload.day]: {
          day: action.payload.day,
          time: [...state[action.payload.day].time, action.payload.time]
        }
      };

    default:
      return state;
  }
};
