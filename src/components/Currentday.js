import React from "react";
import { connect } from "react-redux";
import { addTime } from "../actions";
import moment from "moment";
import _ from "lodash";

const CurrentDay = props => {
  let occupiedHour = moment()
    .hour(`${props.occupied.hours}`)
    .minutes(`${props.occupied.minutes}`)
    .format("LT");

  let date = moment(props.day).format("ll");
  let time = [];
  let startHour = props.startHour * 60;
  let endHour = props.endHour * 60;
  let step = parseInt(props.step);

  for (let i = startHour; i <= endHour; i += step) {
    let minutes = moment(props.day)
      .add(i, "minutes")
      .format("LT");
    time = [...time, minutes];
    console.log(occupiedHour);
    console.log(step);
  }

  const renderTime = time.map((t, k) => {
    if (t === _.find(occupiedHour))
      return (
        <div key={k} className="timesheet_item_unclickable">
          {t}
        </div>
      );
    return (
      <div
        key={k}
        className="timesheet_item"
        onClick={() =>
          props.addTime(
            moment()
              .hour(`${t}`)
              .minutes(0)
              .format("LT"),
            moment()
              .hour(0)
              .minutes(`${t}`)
              .format("LT")
          )
        }
      >
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

const mapStateToProps = state => {
  return { occupied: state.occupied };
};

export default connect(
  mapStateToProps,
  { addTime }
)(CurrentDay);
