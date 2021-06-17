import Robot from "./robot";
import gameLoop from "./gameLoop";
import ProcessCodes from "../utils/ProcessCodes";
import UserActions from "./UserActions";

const robot = new Robot();

gameLoop((command) => {
  switch (command) {
    case UserActions.RotateLeft:
      robot.rotateLeft();
      console.log("# Rotate the robot to the LEFT");
      break;

    case UserActions.RotateRight:
      robot.rotateRight();
      console.log("# Rotate the robot to the RIGHT");
      break;

    case UserActions.Move:
      robot.move();
      console.log(`# MOVE the robot to {${Math.round(robot.position.x)}, ${Math.round(robot.position.y)}}`);
      break;

    case UserActions.Quit:
      console.log("# Exit the game");
      process.exit(ProcessCodes.CorrectExitCode);
      break;

    default:
      console.log(`# ==\n# Wrong command "${command}" provided\n# ==`);
  }
});
