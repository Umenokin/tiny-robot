import Robot from "./robot";
import gameLoop from "./gameLoop";
import ProcessCodes from "../utils/ProcessCodes";

const robot = new Robot();

gameLoop((command) => {
  switch (command) {
    case "L":
      robot.rotateLeft();
      console.log("# Rotate the robot to the LEFT");
      break;

    case "R":
      robot.rotateRight();
      console.log("# Rotate the robot to the RIGHT");
      break;

    case "M":
      robot.move();
      console.log(`# MOVE the robot to {${Math.round(robot.position.x)}, ${Math.round(robot.position.y)}}`);
      break;

    case "Q":
      console.log("# Exit the game");
      process.exit(ProcessCodes.CorrectExitCode);
      break;

    default:
      console.log(`# ==\n# Wrong command "${command}" provided\n# ==`);
  }
});
