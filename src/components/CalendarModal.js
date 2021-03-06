import React from "react";
import { connect } from "react-redux";
import { addTime, hideModal } from "../actions";
import ReactModal from "react-modal";
import Cal from "react-calendar";

class CalendarModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      day: null,
      step: 15,
      startTime: "09:00",
      endTime: "18:00"
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (this.state.startTime > this.state.endTime) {
      alert(
        "The meeting cannot start after the end time - please choose the correct start time"
      );
    } else if (this.state.day === null) {
      alert("Please choose a day");
    } else {
      this.props.addTime(
        this.state.title,
        this.state.startTime,
        this.state.endTime,
        this.state.step,
        this.state.day
      );
      this.props.hideModal();
    }
  }

  handleOnChangeDate(e) {
    this.setState({ day: e });
  }

  handleOnChangeTimes(e) {
    const {
      target: { id, value }
    } = e;
    this.setState({ [id]: value });
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.showModal}
        onRequestClose={this.props.hideModal}
        ariaHideApp={false}
        className="ui container standard modal visible active "
        style={{
          content: {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }
        }}
      >
        <div className="button-container">
          <button
            className="ui button primary left-align"
            onClick={this.props.hideModal}
          >
            X
          </button>
        </div>
        <div className="ui hidden divider" />
        <form className="ui form container" onSubmit={this.handleOnSubmit}>
          <label className="ui label">Please name the event</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            onChange={e => this.handleOnChangeTimes(e)}
            required
            onInvalid={() => {
              alert("srak");
            }}
          />

          <div className="ui hidden divider" />
          <label className="ui label">Please choose the start time</label>
          <input
            type="time"
            id="startTime"
            onChange={e => this.handleOnChangeTimes(e)}
            required
            step="1800"
            defaultValue="09:00"
          />
          <div className="ui hidden divider" />
          <label className="ui label">Please choose the end time</label>
          <input
            type="time"
            id="endTime"
            onChange={e => this.handleOnChangeTimes(e)}
            required
            step="1800"
            defaultValue="18:00"
          />
          <div className="ui hidden divider" />
          <label className="ui label">Please choose the meeting length</label>
          <select
            name="step"
            id="step"
            onChange={e => this.handleOnChangeTimes(e)}
            required
          >
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1,5 hours</option>
          </select>
          <div className="ui hidden divider" />
          <label className="ui label">Please choose the date</label>
          <Cal onClickDay={e => this.handleOnChangeDate(e)} />
          <div className="ui hidden divider" />
          <div className="button-container">
            <button className="ui button primary">SUBMIT ME </button>
          </div>
        </form>
      </ReactModal>
    );
  }
}

const mapStateToProps = state => {
  return { showModal: state.showModal };
};

export default connect(
  mapStateToProps,
  { addTime, hideModal }
)(CalendarModal);
