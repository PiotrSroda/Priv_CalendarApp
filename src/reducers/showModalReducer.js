import { OPEN_MODAL, HIDE_MODAL } from "../actions/types";

export const showModalReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case HIDE_MODAL:
      return action.payload;
    default:
      return state;
  }
};
