import React from "react";
import { connect } from "react-redux";
import { openModal } from "../actions";
import CalendarModal from "./CalendarModal";
import EventList from "./EventList";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <button className="ui button primary" onClick={this.props.openModal}>
          Add a calendar
        </button>
        <div className="ui hidden divider" />

        <div className="ui divided grid">
          {this.props.plannedEvents.map((i, k) => {
            return (
              <EventList
                title={i.title}
                startTime={i.startTime}
                endTime={i.endTime}
                step={i.step}
                key={k}
                itemKey={k}
              />
            );
          })}
        </div>
        <CalendarModal />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { plannedEvents: state.occupied };
};

export default connect(
  mapStateToProps,
  { openModal }
)(Dashboard);
