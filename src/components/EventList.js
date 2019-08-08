import React from "react";
import { connect } from "react-redux";
import { addMeeting } from "../actions";
import moment from "moment";
import _ from "lodash";

class EventList extends React.Component {
  state = {
    eventDay: this.props.day,
    eventTime: this.props.time
  };
  render() {
    let thisDay = moment(this.props.day).format("dddd, MMMM Do YYYY");
    let wholeDay = [];
    let startMinute = moment.duration(this.props.startTime).asMinutes();
    let endMinute = moment.duration(this.props.endTime).asMinutes();
    let step = Number.parseInt(this.props.step, "base");

    for (let i = startMinute; i <= endMinute; i += step) {
      let minutes = moment(this.props.day)
        .add(i, "minutes")
        .format("LT");
      wholeDay = [...wholeDay, minutes];
    }

    const renderTime = wholeDay.map((t, k) => {
      return (
        <div
          className="three wide column"
          key={k}
          onClick={() => planMeeting(t)}
        >
          <p className="ui large button ">{t}</p>
        </div>
      );
    });
    const planMeeting = t => {
      this.props.addMeeting(this.state.eventDay, t);
    };
    return (
      <div className="ui segment grid" key={this.props.itemKey}>
        <div className="ui container">
          <h1>{this.props.title}</h1>
          <p>
            You can arrange meetings from {this.props.startTime} to{" "}
            {this.props.endTime}
          </p>
          <p>on {thisDay}</p>
          <p>Meeting can be arranged every {this.props.step} minutes</p>
        </div>
        <div className="ui hidden divider" />
        <div className="ui container">
          <div className="ui padded grid">{renderTime}</div>
        </div>
        <div className="ui hidden divider" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { occupied: state.occupied };
};

export default connect(
  mapStateToProps,
  { addMeeting }
)(EventList);
