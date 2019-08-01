import React from "react";
import moment from "moment";
import Cal from "react-calendar";

const EventList = props => {
  let wholeDay = [];
  let startMinute = moment.duration(props.startTime).asMinutes();
  let endMinute = moment.duration(props.endTime).asMinutes();
  let step = Number.parseInt(props.step, "base");

  for (let i = startMinute; i <= endMinute; i += step) {
    let minutes = moment(props.day)
      .add(i, "minutes")
      .format("LT");
    wholeDay = [...wholeDay, minutes];
    console.log(wholeDay);
  }

  const renderTime = wholeDay.map((t, k) => {
    return <div key={k}>{t}</div>;
  });

  return (
    <div className="ui segment grid" key={props.itemKey}>
      <div>
        <h1>{props.title}</h1>
        <p>
          You can arrange meetings from {props.startTime} to {props.endTime}
        </p>
        <p>Meeting can be arranged every {props.step} minutes</p>
      </div>
      <div>
        <Cal value={props.day} showNavigation={false} />
      </div>
    </div>
  );
};

export default EventList;
