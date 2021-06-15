const asserts = {
  // Assert which confirms only the fact that objects having the same time.
  assertType: (desc, value, refValue) => {
    console.log(desc, typeof value === typeof refValue);
  },

  // Assert that two vectors are the same.
  // TODO This is not ideal comparison, because numbers which ar doubles can have "ALMOST" identical
  // So better test it with threshold.
  assertVec2d: (desc, value, refValue) => {
    if (asserts.assertType(desc, value, refValue)) {
      console.log(desc, value.x === refValue.x && value.y === refValue.y);
    }
  }
};

module.exports = asserts;
