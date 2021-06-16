import Vec2d from "../math/vec2d";

export default class Robot {
  constructor(
    private _position = new Vec2d(0, 0),
    private _rotation = new Vec2d(0, 1)
  ) {}

  public get position(): Vec2d {
    // Make a copy to prevent modifying position by reference
    return this._position.clone();
  }

  public get rotation(): Vec2d {
    // Make a copy to prevent modifying rotation by reference
    return this._rotation.clone();
  }

  public move(): void {
    this._position.add(this._rotation);
  }

  public rotateLeft(): void {
    this._rotation.rotate(90);
  }

  public rotateRight(): void {
    this._rotation.rotate(-90);
  }
}

