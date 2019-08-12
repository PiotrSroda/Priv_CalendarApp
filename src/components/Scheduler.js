import React from "react";
import { connect } from "react-redux";

const Scheduler = props => {
  console.log(props.meetings);
  const renderMeetings = () => {
    props.meetings.map((t, k) => {
      return <div>{t}</div>;
    });
  };

  return <div>{renderMeetings()}</div>;
};

const mapStateToProps = state => {
  return { meetings: state.meetings };
};

export default connect(
  mapStateToProps,
  null
)(Scheduler);
