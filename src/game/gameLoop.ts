import * as readline from "readline";
import ProcessCodes from "../utils/ProcessCodes";
import UserActions from "./UserActions";

type GameLoopCallback = (command: UserActions) => void;

export default function gameLoop(callback: GameLoopCallback): void {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log([
    "Commands:",
    "  L - rotate the robot to the LEFT",
    "  R - rotate the robot to the RIGHT",
    "  M - move the robot in current direction",
    "  Q - exit the game"
  ].join("\n"));

  terminal.prompt();

  terminal.on("line", (command) => {
    callback(command.trim().toUpperCase() as UserActions);
    terminal.prompt();
  });

  terminal.on("close", () => {
    console.log("Exit the game");
    process.exit(ProcessCodes.ErrorExitCode);
  });
}

