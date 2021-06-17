import { deg2rad } from "./angle";

export default class Vec2d {
  constructor(public x = 0, public y: any = 0) {}

  public set(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  public get len(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public add(vec: Vec2d): void {
    this.x += vec.x;
    this.y += vec.y;
  }

  public normalize(): void {
    const { len } = this;

    this.x /= len;
    this.y /= len;
  }

  public rotate(degrees: number): void {
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

  public clone(): Vec2d {
    return new Vec2d(this.x, this.y);
  }
}

