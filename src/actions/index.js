export const ADD_TIME = "ADD_TIME";

export const addTime = (hour, minutes) => ({
  type: ADD_TIME,
  payload: {
    hours: hour,
    minutes: minutes
  }
});
