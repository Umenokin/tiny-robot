const readline = require('readline');

const Robot = require("./robot");
const runner = require('./game_runner');

const robot = new Robot();

runner((command) => {
  switch(command) {
    case "L":
      robot.rotateLeft();
      console.log('# ==\n# Rotate the robot to the LEFT\n# ==\n');
      break;

    case "R":
      robot.rotateRight();
      console.log('# ==\n# Rotate the robot to the RIGHT\n# ==\n');
      break;

    case "M":
      robot.move()
      console.log('# ==\n# MOVE the robot to', robot.position, "\n# ==\n");
      break;

    case "Q":
      console.log('# ==\n# Exit the game\n# ==\n');
      process.exit(0);
      break;

    default:
      console.log(`# ==\n# Wrong command "${command}" provided\n# ==`);
  }
})
