const { assertVec2d } = require("../assert");
const Vec2d = require("../vec2d");

assertVec2d("make sure that Vec2d() is equal to {0, 0}", new Vec2d(), new Vec2d(0, 0));

let vec = new Vec2d(0, 1);
vec.rotate(90);
assertVec2d("rotating {0, 1} by 90 degrees should become {-1, 0}", vec, new Vec2d(-1, 0));

vec = new Vec2d(0, 1);
vec.rotate(-90);
assertVec2d("rotating {0, 1} by -90 degrees should become {0, 1}", vec, new Vec2d(1, 0));

vec = new Vec2d(0, 10);
vec.normalize();
assertVec2d("normalized vector {0, 10} should have unit length and become {0, 1}", vec, new Vec2d(0, 1));

vec = new Vec2d(0, 1);
vec.add(new Vec2d(1,0));
assertVec2d("adding vector {0, 1} to vector {1, 0} should produce {1,1}", vec, new Vec2d(1, 1));


assertVec2d("length of the vector {0, 10} should be equal to 10", new Vec2d(0,10).len, 10);
assertVec2d("length of the vector {10, 0} should be equal to 10", new Vec2d(10,0).len, 10);