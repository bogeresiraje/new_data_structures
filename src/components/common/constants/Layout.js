// TO-DO: test responsiveness for windows with low height and high width

// game pieces
const NUM_DISKS = 3;
const MAX_TOTAL_DISKS = 9;

// dimensions
const TOWER_WIDTH = `${2 * MAX_TOTAL_DISKS / NUM_DISKS}vw`;
const HEADER_HEIGHT = `100vmin/6`;
const FOOTER_HEIGHT = `2rem`;
const SETTING_HEIGHT = `(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`;
const TOWER_HEIGHT = `(${TOWER_WIDTH}) * (${NUM_DISKS} + 1)`;
const DISK_HEIGHT = `((${TOWER_HEIGHT}) / 12)`;

// disk width factor
const getWidthFactor = () => {
  switch (NUM_DISKS) {
    case 1:
      return 13;
    case 2:
      return 10.5;
    case 3:
      return 8;
    case 4:
      return 6.5;
    case 5:
      return 5;
    case 6:
      return 4.5;
    case 7:
      return 4;
    case 8:
      return 3.5;
    case 9:
      return 3;
    default:
      return 3;
  }
}

const DISK_WIDTH_FACTOR = getWidthFactor();

export default {
  TOWER_WIDTH,
  HEADER_HEIGHT,
  FOOTER_HEIGHT,
  SETTING_HEIGHT,
  TOWER_HEIGHT,
  DISK_HEIGHT,
  DISK_WIDTH_FACTOR,
  NUM_DISKS,
  MAX_TOTAL_DISKS,
};
