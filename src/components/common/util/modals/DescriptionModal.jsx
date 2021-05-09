import React from "react";
import ReactModal from "react-modal";

import Description from "./Description";

const DescriptionModal = props => (
  <ReactModal
    contentLabel="Towers of Hanoi - Game Objective"
    isOpen={props.showDescription}
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
    <Description toggleModal={props.toggleDescription} />
  </ReactModal>
);

export default DescriptionModal;
