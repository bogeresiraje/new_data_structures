import React from "react";
import ReactModal from "react-modal";

import Results from "./Results";

const ResultsModal = props => (
  <ReactModal
    contentLabel="Towers of Hanoi - Game Results"
    isOpen={props.showResults}
    onAfterOpen={props.afterOpenModal}
    onRequestClose={props.requestCloseModal}
    style={{
      overlay: {
        background: "rgba(0, 0, 0, 0.75)",
        zIndex: "3"
      },
      content: {
        margin: "0",
        padding: "0",
        background: "none",
        outline: "none",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }}
    shouldFocusAfterRender={true}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    shouldReturnFocusAfterClose={true}
    ariaHideApp={false}
  >
    <Results toggleModal={props.toggleResults} />
  </ReactModal>
);

export default ResultsModal;
