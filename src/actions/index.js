import { ADD_TIME, ADD_MEETING, OPEN_MODAL, HIDE_MODAL } from "./types";

export const addTime = (title, startTime, endTime, step, day) => ({
  type: ADD_TIME,
  payload: {
    title,
    startTime,
    endTime,
    step,
    day
  }
});

export const addMeeting = (day, time) => ({
  type: ADD_MEETING,
  payload: {
    day,
    time
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
