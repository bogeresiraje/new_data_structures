import React, { Component } from "react";
import Tower from "./Tower";
import Layout from "../constants/Layout";
import withDragDropContext from "../lib/withDragDropContext";

const FloorSpace = () => (
  <div style={{ borderBottom: "1px solid black" }} />
);

class Setting extends Component {
  render() {
    const {
      towers,
      numMovesPlayed,
      // showDescription,
      // showResults,
      // toggleResults,
      removeDisk,
      insertDisk,
      isValidMove,
      isOnTop,
      gameIsWon
    } = this.props;
    let i = 0; // tower index
    return (
      <div style={settingStyle}>
        <FloorSpace />
        <Tower
          key={towers[i].id}
          disks={towers[i++].disks}
          numMovesPlayed={numMovesPlayed}
          removeDisk={(diskId) => removeDisk(diskId)}
          insertDisk={(diskId, towerId) => insertDisk(diskId, towerId)}
          isValidMove={(diskId, towerId) => isValidMove(diskId, towerId)}
          isOnTop={(diskId) => isOnTop(diskId)}
        />
        <FloorSpace />
        <Tower
          key={towers[i].id}
          disks={towers[i++].disks}
          numMovesPlayed={numMovesPlayed}
          removeDisk={(diskId) => removeDisk(diskId)}
          insertDisk={(diskId, towerId) => insertDisk(diskId, towerId)}
          isValidMove={(diskId, towerId) => isValidMove(diskId, towerId)}
          isOnTop={(diskId) => isOnTop(diskId)}
          gameIsWon={() => gameIsWon()}
        />
        <FloorSpace />
        <Tower
          key={towers[i].id}
          disks={towers[i++].disks}
          numMovesPlayed={numMovesPlayed}
          removeDisk={(diskId) => removeDisk(diskId)}
          insertDisk={(diskId, towerId) => insertDisk(diskId, towerId)}
          isValidMove={(diskId, towerId) => isValidMove(diskId, towerId)}
          isOnTop={(diskId) => isOnTop(diskId)}
          gameIsWon={() => gameIsWon()}
        />
        <FloorSpace />
      </div>
    );
  }
}

// render style for three towers
const settingStyle = {
  height: `calc(${Layout.SETTING_HEIGHT})`,
  display: "grid",
  gridTemplateColumns: `
    1fr 
    calc(${Layout.TOWER_WIDTH})
    1.75fr
    calc(${Layout.TOWER_WIDTH})
    1.75fr
    calc(${Layout.TOWER_WIDTH})
    1fr
  `,
  justifyContent: "stretch",
  alignItems: "end",
  overflow: "hidden",
};

export default withDragDropContext(Setting);
