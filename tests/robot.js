const readline = require('readline');

const { assertVec2d } = require("../assert");
const Robot = require("../game/robot");

const robot = new Robot();

assertVec2d("initial position expected to be { 0, 0 }", robot.position, { x: 0, y: 0 });

robot.move();
assertVec2d("should be in position { 0,  1 }", robot.position, { x: 0, y: 1 });

robot.rotateLeft();
assertVec2d("should be in position { 0,  1 }", robot.position, { x: 0, y: 1 });

robot.move();
assertVec2d("should be in position { -1,  1 }",robot.position, { x: -1, y: 1 });

robot.move();
assertVec2d("should be in position { -2,  1 }", robot.position, { x: -2, y: 1 });

robot.rotateLeft();
assertVec2d("should be in position { -2,  1 }", robot.position, { x: -2, y: 1 });

robot.rotateRight();
assertVec2d("should be in position { -2,  1 }", robot.position, { x: -2, y: 1 });

robot.rotateRight();
assertVec2d("should be in position { -2,  1 }", robot.position, { x: -2, y: 1 });

robot.rotateRight();
assertVec2d("should be in position { -2,  1 }", robot.position, { x: -2, y: 1 });

robot.move();
assertVec2d("should be in position { -1,  1 }", robot.position, { x: -1, y: 1 });
