import React from "react";
import { connect } from "react-redux";
import { addMeeting } from "../actions";
import moment from "moment";
import timeRangeCalculator from "./methods/timeRangeCalculator";

class EventList extends React.Component {
  state = {
    eventDay: this.props.day,
    eventTime: this.props.time,
    plannedTimes: []
  };
  componentDidMount() {
    this.setState({
      plannedTimes: this.props.meetings[this.props.day].time
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.meetings !== prevProps.meetings) {
      this.setState({
        plannedTimes: this.props.meetings[this.props.day].time
      });
    }
  }

  render() {
    let thisDay = moment(this.props.day).format("dddd, MMMM Do YYYY");
    let plannedDay = timeRangeCalculator(
      this.props.day,
      this.props.startTime,
      this.props.endTime,
      this.props.step
    );
    const planMeeting = t => {
      this.props.addMeeting(this.state.eventDay, t);
    };

    const renderTime = plannedDay.map((t, k) => {
      if (this.state.plannedTimes.includes(t)) {
        return (
          <div className="three wide column" key={k}>
            <p className="ui large button disabled">{t}</p>
          </div>
        );
      }
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
  return { occupied: state.occupied, meetings: state.meetings };
};

export default connect(
  mapStateToProps,
  { addMeeting }
)(EventList);
