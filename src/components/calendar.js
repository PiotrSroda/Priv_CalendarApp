import React from "react";
import Cal from "react-calendar";
import CurrentDay from "./currentday";
import "../App.css";

class Calendar extends React.Component {
  state = {
    day: new Date()
  };

  onClick = day => this.setState({ day });

  render() {
    return (
      <div className="calendar_container">
        <div className="calendar">
          <Cal value={this.state.day} onClickDay={this.onClick} />
          <CurrentDay day={this.state.day} />
        </div>
      </div>
    );
  }
}

export default Calendar;
