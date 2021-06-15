const { deg2rad } = require("./angle");

class Vec2d {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  get len() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  add(vec) {
    this.x += vec.x;
    this.y += vec.y;
  }

  normalize() {
    const len = this.len;

    this.x = this.x / len;
    this.y = this.y / len;
  }

  rotate(degrees) {
    // Rotation calculated in radians
    const theta = deg2rad(degrees);
    const cs = Math.cos(theta);
    const sn = Math.sin(theta);

    // Calculate the rotated vector
    this.set(
      this.x * cs - this.y * sn,
      this.x * sn + this.y * cs,
    );

    this.normalize();
  }

  clone() {
    return new Vec2d(this.x, this.y);
  }
}

module.exports = Vec2d;
