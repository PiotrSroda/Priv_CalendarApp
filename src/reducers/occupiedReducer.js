import { ADD_TIME } from "../actions/types";

export const occupiedReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TIME:
      return [...state, action.payload];

    default:
      return state;
  }
};
