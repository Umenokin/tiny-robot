function assertVec2d(desc, value, ref) {
  console.log(`Assert: ${desc}`, value.x === ref.x && value.y === ref.y);
}

module.exports = {
  assertVec2d
};
