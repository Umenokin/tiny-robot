const { expect } = require('chai');
const Vec2d = require('../math/vec2d');

describe("Vec2d", function() {
  it("by default Vec2d() should be equal to {0, 0}", function() {
    expect(new Vec2d()).to.be.deep.equal(new Vec2d(0, 0));
  });

  it("rotating {0, 1} by 90 degrees should become {-1, 0}", function() {
    const vec = new Vec2d(0, 1);
    vec.rotate(90);

    expect(vec.x).to.be.closeTo(-1, 0.0000001);
    expect(vec.y).to.be.closeTo(0, 0.0000001);
  });

  it("rotating {0, 1} by -90 degrees should become {0, 1}", function() {
    const vec = new Vec2d(0, 1);
    vec.rotate(-90);
    expect(vec.x).to.be.closeTo(1, 0.0000001);
    expect(vec.y).to.be.closeTo(0, 0.0000001);
  });

  it("normalized vector {0, 10} should have unit length and become {0, 1}", function() {
    const vec = new Vec2d(0, 10);
    vec.normalize();
    expect(vec.x).to.be.closeTo(0, 0.0000001);
    expect(vec.y).to.be.closeTo(1, 0.0000001);
  });

  it("adding vector {0, 1} to vector {1, 0} should produce {1,1}", function() {
    const vec = new Vec2d(0, 1);
    vec.add(new Vec2d(1,0));
    expect(vec.x).to.be.closeTo(1, 0.0000001);
    expect(vec.y).to.be.closeTo(1, 0.0000001);
  });

  it("length of the vector {0, 10} should be equal to 10", function() {
    expect(new Vec2d(0,10).len).to.be.closeTo(10, 0.0000001);
  });

  it("length of the vector {10, 0} should be equal to 10", function() {
    expect(new Vec2d(10,0).len).to.be.closeTo(10, 0.0000001);
  });
});







