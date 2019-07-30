import React from "react";
import { connect } from "react-redux";
import { addTime, hideModal } from "../actions";
import ReactModal from "react-modal";
import Scheduler from "./Scheduler";

class CalendarModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.addTime(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value
    );
    this.props.hideModal();
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
        <form className="ui form" onSubmit={this.handleOnSubmit}>
          <input type="text" label="Title" placeholder="Title" />
          <input type="time" label="Start Time" />
          <input type="time" label="End Time" />
          <select name="step">
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
          </select>
          <button className="ui button primary">SUBMIT ME </button>
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
