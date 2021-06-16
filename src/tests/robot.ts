import { expect } from "chai";

import Robot from "../game/robot";
import Vec2d from  '../math/vec2d';

describe("Robot", function() {
  it("test complex robot behaviour from assignment", function() {
    const robot = new Robot();

    expect(robot.position, "initial position expected to be { 0, 0 }").to.be.deep.equal(new Vec2d(0, 0));

    robot.move();
    expect(robot.position, "should be in position { 0,  1 }").to.be.deep.equal(new Vec2d(0, 1));

    robot.rotateLeft();
    expect(robot.position, "should be in position { 0,  1 }").to.be.deep.equal(new Vec2d(0, 1));

    robot.move();
    expect(robot.position, "should be in position { -1,  1 }").to.be.deep.equal(new Vec2d(-1, 1));

    robot.move();
    expect(robot.position, "should be in position { -2,  1 }").to.be.deep.equal(new Vec2d(-2, 1));

    robot.rotateLeft();
    expect(robot.position, "should be in position { -2,  1 }").to.be.deep.equal(new Vec2d(-2, 1));

    robot.rotateRight();
    expect(robot.position, "should be in position { -2,  1 }").to.be.deep.equal(new Vec2d(-2, 1));

    robot.rotateRight();
    expect(robot.position, "should be in position { -2,  1 }").to.be.deep.equal(new Vec2d(-2, 1));

    robot.rotateRight();
    expect(robot.position, "should be in position { -2,  1 }").to.be.deep.equal(new Vec2d(-2, 1));

    robot.move();
    expect(robot.position, "should be in position { -1,  1 }").to.be.deep.equal(new Vec2d(-1, 1));
  });
});

