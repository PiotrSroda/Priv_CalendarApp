import React from "react";
import Scheduler from "./Scheduler";
import CalendarModal from "./CalendarModal";

class Dashboard extends React.Component {
  state = {
    calendars: []
  };

  render() {
    const onAddCalendar = () => {
      this.setState({ calendars: [...this.state.calendars, 1] });
    };

    return (
      <div>
        <button className="primary button" onClick={onAddCalendar}>
          Add a calendar
        </button>

        {this.state.calendars.map((i, k) => {
          return <Scheduler key={k} />;
        })}
        <CalendarModal isOpen={true} />
      </div>
    );
  }
}

export default Dashboard;
