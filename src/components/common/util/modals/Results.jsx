import React from "react";

const Results = props => (
  <div
    style={{
      maxWidth: "23rem",
      display: "flex",
      flexFlow: "column nowrap",
      margin: "1rem",
      padding: "1rem 1rem",
      color: "white",
      background: "rgba(241, 91, 49, 0.8)",
      borderRadius: "0.25rem",
      boxShadow: "0.75rem 0.75rem 0.5rem 0.25rem rgba(0, 0, 0, 0.4)"
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>{"Results"}</h2>
      {/* X button in top-right corner of modal */}
      <button
        onClick={event => props.toggleModal(event)}
        style={{
          background: "none",
          outline: "none",
          padding: "0 2rem",
          margin: "-2.25rem -2.25rem 0 0",
          fontWeight: "100"
        }}
      >
        {"X"}
      </button>
    </div>
    <p style={{ fontSize: "1rem", textAlign: "justify" }}>
      {"Congratulations, you won!"}
    </p>
    {/* wide close button along bottom of modal */}
    <button
      onClick={event => props.toggleModal(event)}
      style={{
        border: "1px solid white",
        borderRadius: "0.25rem",
        outline: "none",
        padding: "0.5rem",
        marginTop: "1rem",
        background: "rgba(0, 0, 0, 0.1)",
        color: "white",
        fontWeight: "900",
        textTransform: "uppercase"
      }}
    >
      {"Close"}
    </button>
  </div>
);

export default Results;
