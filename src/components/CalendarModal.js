import React from "react";
import ReactModal from "react-modal";

class CalendarModal extends React.Component {
  state = {
    showModal: this.props.isOpen
  };

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <ReactModal
        isOpen={this.state.showModal}
        contentLabel="Minimal Modal Example"
        onRequestClose={() => this.handleCloseModal()}
      >
        <p>JIMMY BONZO</p>
        <button
          className="button primary"
          onClick={() => this.handleCloseModal()}
        >
          X
        </button>
      </ReactModal>
    );
  }
}

export default CalendarModal;
