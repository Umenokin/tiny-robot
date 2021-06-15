const Vec2d = require("../math/vec2d");

class Robot {
  // With TypeScript of latest JS I woul use access modifiers but for current JS version would use "_"
  constructor() {
    this._position = new Vec2d(0, 0);
    this._rotation = new Vec2d(0, 1);
  }

  get position() {
    return this._position.clone(); // Make a copy to prevent modifying position by reference
  }

  get rotation() {
    return this._rotation.clone(); // Make a copy to prevent modifying rotation by reference
  }

  move() {
    this._position.add(this._rotation);
  }

  rotateLeft() {
    this._rotation.rotate(90);
  }

  rotateRight() {
    this._rotation.rotate(-90)
  }
}

module.exports = Robot;
