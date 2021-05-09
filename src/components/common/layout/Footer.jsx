import React, { Component } from "react";

class Footer extends Component {
  render() {
    const hrefFooter = {
      color: "rgba(241, 91, 49, 1)",
      textDecoration: "none",
      fontWeight: "600",
      textShadow: "1.5px 1.5px 0px black",
    };
    return (
      <footer
        style={{
          padding: "0 0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          fontSize: "1rem",
          background:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))",
        }}
      >
        <p style={{ textTransform: "uppercase" }}>
          <a
            href="https://github.com/simongt/towers-of-hanoi"
            target="_blank"
            rel="noopener noreferrer"
            style={hrefFooter}
          >
            <i
              className="fab fa-github"
              style={{ marginRight: "0.25rem" }}
            />
            {"GitHub"}
          </a>
        </p>
        <p style={{ textTransform: "uppercase" }}>
          <a
            href="https://simongt.net"
            target="_blank"
            rel="noopener noreferrer"
            style={hrefFooter}
          >
            {"// simongt . net"}
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
