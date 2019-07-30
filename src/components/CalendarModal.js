import React from "react";
import ReactModal from "react-modal";
import Scheduler from "./Scheduler";

class CalendarModal extends React.Component {
  state = {
    showModal: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isOpen !== prevState.showModal) {
      this.setState({ showModal: this.props.isOpen });
    }
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <ReactModal
        isOpen={this.state.showModal}
        onRequestClose={() => this.handleCloseModal()}
        className="ui standard modal visible active"
      >
        <div className="ui input">
          <button
            className="ui button primary"
            onClick={() => this.handleCloseModal()}
          >
            X
          </button>
        </div>
        <form className="form ui">
          <input />
          <input />
          <input />
          <Scheduler />
        </form>
      </ReactModal>
    );
  }
}

export default CalendarModal;
