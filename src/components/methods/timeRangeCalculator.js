import moment from "moment";

const timeRangeCalculator = (day, startTime, endTime, stepTime) => {
  let wholeDay = [];
  let startMinute = moment.duration(startTime).asMinutes();
  let endMinute = moment.duration(endTime).asMinutes();
  let step = Number.parseInt(stepTime, "base");

  for (let i = startMinute; i <= endMinute; i += step) {
    let minutes = moment(day)
      .add(i, "minutes")
      .format("LT");
    wholeDay = [...wholeDay, minutes];
  }
  return wholeDay;
};

export default timeRangeCalculator;
