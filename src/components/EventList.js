import React from "react";

const EventList = props => {
  return (
    <div key={props.itemKey} className="ui segment">
      <p>Meeting id: {props.itemKey}</p>
      <h1>{props.title}</h1>
      <p>
        You can arrange meetings from {props.startTime} to {props.endTime}
      </p>
      <p>Meeting can be arranged every {props.step} minutes</p>
    </div>
  );
};

export default EventList;
