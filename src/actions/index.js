export const ADD_TIME = "ADD_TIME";
export const OPEN_MODAL = "OPEN_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const addTime = (title, startTime, endTime, step) => ({
  type: ADD_TIME,
  payload: {
    title,
    startTime,
    endTime,
    step
  }
});

export const openModal = () => ({
  type: OPEN_MODAL,
  payload: true
});

export const hideModal = () => ({
  type: HIDE_MODAL,
  payload: false
});
