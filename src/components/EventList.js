import React from "react";
import Cal from "react-calendar";

const EventList = props => {
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
        <Cal value={props.day} disableTile={true} showNavigation={false} />
      </div>
    </div>
  );
};

export default EventList;
