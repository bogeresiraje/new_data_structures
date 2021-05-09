import React from "react";
import Layout from "../constants/Layout";

const Overlay = ({rank}) => {
  const width = `(${Layout.TOWER_WIDTH} + ${rank * Layout.DISK_WIDTH_FACTOR}vw)`;
  const offset = `${rank * Layout.DISK_WIDTH_FACTOR / 2}vw`;
  // hue of green: divide spectrum from yellow (200) to red (36)
  const green = 200 - rank * ((200 - 36) / Layout.NUM_DISKS);
  const overlayStyle ={
    background: `rgb(244, ${green}, 36)`,
    transform: `translateX(calc(-1 * (${offset})))`,
    border: "1px solid black",
    borderRadius: `calc((${Layout.DISK_HEIGHT}) / 1.5)`,
    height: `calc(
        ${Layout.DISK_HEIGHT} * ${Layout.MAX_TOTAL_DISKS} / ${Layout.NUM_DISKS}
      )`,
    width: `calc(${width})`,
    boxShadow: "inset 0 0 2px 0 black",
    opacity: "0.75",
  }
  return (
    <div style={overlayStyle} />
  );
};

export default Overlay;
