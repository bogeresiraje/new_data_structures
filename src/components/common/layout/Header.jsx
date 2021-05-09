import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header
        style={{
          paddingBottom: "0.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))",
          borderBottom: "1px solid black"
        }}
      >
        <h1
          style={{
            color: "rgba(229, 172, 0, 1)",
            fontSize: "calc(100vmin/12)", // responsive solution
            textTransform: "uppercase",
            fontWeight: "100",
            textShadow: "4px 4px 2px rgba(0, 0, 0, 1)"
          }}
        >
          {"Towers of Hanoi"}
        </h1>
      </header>
    )
  }
}

export default Header;
