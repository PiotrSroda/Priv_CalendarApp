import React from "react";
import moment from "moment";

const CurrentDay = props => {
  let occupiedHour = moment()
    .hour(`${props.occupied}`)
    .minutes(0)
    .format("LT");

  let date = moment(props.day).format("ll");
  let time = [];
  let startHour = props.startHour * 60;
  let endHour = props.endHour * 60;
  let step = props.step;

  for (let i = startHour; i <= endHour; i += step) {
    let minutes = moment(props.day)
      .add(i, "minutes")
      .format("LT");
    time = [...time, minutes];
  }
  console.log(occupiedHour);

  const renderTime = time.map((t, k) => {
    if (t === occupiedHour)
      return (
        <div key={k} className="timesheet_item_unclickable">
          {t}
        </div>
      );
    return (
      <div key={k} className="timesheet_item">
        {t}
      </div>
    );
  });
  if (props.day) {
    return (
      <div>
        <div>{date}</div>
        <div className="timesheet_container">{renderTime}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default CurrentDay;
