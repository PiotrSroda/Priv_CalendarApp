import React from "react";
import moment from "moment";

const CurrentDay = props => {
  let date = moment(props.day).format("ll");
  let time = [];
  for (let i = 9; i <= 21; i += 1) {
    let hrs = moment(props.day).add(i, "hours");
    for (let z = 0; z <= 45; z += 15) {
      let hrsmints = moment(hrs)
        .add(z, "minutes")
        .format("LT");
      time = [...time, hrsmints];
    }
  }

  const renderTime = time.map((t, k) => {
    return (
      <div key={k} className="timesheet_item">
        {t}
      </div>
    );
  });
  console.log(time);
  return (
    <div>
      <div>{date}</div>
      <div className="timesheet_container">{renderTime}</div>
    </div>
  );
};

export default CurrentDay;
