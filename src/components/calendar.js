import React from "react";
import Cal from "react-calendar";
import CurrentDay from "./currentday";
import "../App.css";

class Calendar extends React.Component {
  state = {
    day: null
  };

  onClick = day => this.setState({ day });

  render() {
    return (
      <div className="calendar_container">
        <div className="calendar">
          <Cal value={this.state.day} onClickDay={this.onClick} />
          <CurrentDay
            day={this.state.day}
            startHour={9}
            endHour={22}
            step={15}
            occupied={15}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;
