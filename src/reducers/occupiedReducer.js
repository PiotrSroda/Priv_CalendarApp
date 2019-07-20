import { ADD_TIME } from "../actions";

export const occupiedReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TIME:
      return [
        ...state,
        {
          hours: action.payload.hours,
          minutes: action.payload.minutes
        }
      ];

    default:
      return state;
  }
};
