const readline = require('readline');

const Robot = require("./robot");

function runner(callback) {
  const terminal = readline.createInterface({
    input : process.stdin,
    output : process.stdout
  });

  terminal.setPrompt(
`Commands:
  L - rotate the robot to the LEFT
  R - rotate the robot to the RIGHT
  M - move the robot in current direction
  Q - exit the game
`
  );

  terminal.prompt();

  terminal.on('line', (command) => {
    callback(command.trim().toUpperCase());
    terminal.prompt();
  });

  terminal.on('close', () => {
    console.log('Exit the game');
    process.exit(1);
  });
}

module.exports = runner;