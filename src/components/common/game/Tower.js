import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import Disk from "./Disk";
import Overlay from "../util/Overlay";
import Layout from "../constants/Layout";
import ItemTypes from "../constants/ItemTypes";

// drop target specification that only handles the drop event
const towerTarget = {
	canDrop({ isValidMove, isOnTop }, monitor) {
		const diskIsOverTower = monitor.isOver();
		const rank = monitor.getItem().rank;
		const diskIsOnTop = isOnTop(rank);
		const target = parseInt(monitor.targetId.substr(1)) + 1;
		return diskIsOverTower && diskIsOnTop ? isValidMove(rank, target) : false;
	},
	drop({ removeDisk, insertDisk }, monitor) {
		const rank = monitor.getItem().rank;
		const target = parseInt(monitor.targetId.substr(1)) + 1;
		removeDisk(rank);
		insertDisk(rank, target);
	},
	hover() { }
};

const collect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	canDrop: monitor.canDrop(),
	diskIsOverTower: monitor.isOver(),
	diskDragged: monitor.getItem(),
});

class Tower extends Component {
	render() {
		const {
			disks,
			connectDropTarget,
			diskIsOverTower,
			// canDrop,
			diskDragged,
			// gameIsWon,
			// numMovesPlayed,
		} = this.props;
		const background = diskIsOverTower
			? `linear-gradient(
          to bottom,
          rgba(255, 204, 0, 1),
          rgba(241, 91, 49, 0.9),
          rgba(252,40, 93, 0.75),
          rgba(0, 0, 0, 0.4)
        )`
			: `linear-gradient(
          to bottom,
          rgba(241, 91, 49, 0.9),
          rgba(252,40, 93, 0.75),
          rgba(0, 0, 0, 0.4)
        )`;
		const borderRadius = `calc((${Layout.TOWER_WIDTH}) / 4)`;
		const towerStyle = {
			position: "relative",
			width: "100%",
			height: `calc(${Layout.TOWER_HEIGHT})`,
			borderStyle: "solid",
			borderWidth: "1px 1px 0px 1px",
			borderRadius: `${borderRadius} ${borderRadius} 0 0`,
			display: "grid",
			alignItems: "end",
			alignContent: "end",
			background: background,
		};

		return connectDropTarget(
			<div style={towerStyle}>
				{/* render overlay while dragging disk over tower */}
				{diskIsOverTower && <Overlay rank={diskDragged.rank} />}
				{/* render disks if tower has any */}
				{disks && disks.map(disk => <Disk key={disk.id} rank={disk.id} />)}
			</div>
		);
	}
}

export default DropTarget(ItemTypes.DISK, towerTarget, collect)(Tower);
