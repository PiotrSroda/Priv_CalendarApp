import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import _ from "lodash";

class Scheduler extends React.Component {
  state = {
    meetingsPlanned: []
  };

  componentDidMount() {
    let allDays = _.values(this.props.meetings);
    this.setState({
      meetingsPlanned: allDays
    });
  }

  render() {
    const renderMeetings = this.state.meetingsPlanned.map((m, k) => {
      let parsedDay = moment(m.day).format("dddd, MMMM Do YYYY");
      let parsedTime = m.time.map((t, k) => {
        return (
          <div className="three wide column segment" key={k}>
            {t}
          </div>
        );
      });
      return (
        <div className="ui segment grid" key={k}>
          <h1 className="segment red row" key={k}>
            {parsedDay}
          </h1>
          {parsedTime}
        </div>
      );
    });

    return (
      <div className="container">
        <div>{renderMeetings}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { meetings: state.meetings };
};

export default connect(
  mapStateToProps,
  null
)(Scheduler);
