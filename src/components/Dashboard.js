import React from "react";
import Scheduler from "./Scheduler";
import CalendarModal from "./CalendarModal";

class Dashboard extends React.Component {
  state = {
    calendars: [],
    openModal: false
  };

  render() {
    const onOpenCalendar = () => {
      this.setState({ openModal: true });
    };

    return (
      <div>
        <button className="ui button primary" onClick={onOpenCalendar}>
          Add a calendar
        </button>

        {this.state.calendars.map((i, k) => {
          return <Scheduler key={k} />;
        })}
        <CalendarModal isOpen={this.state.openModal} />
      </div>
    );
  }
}

export default Dashboard;
