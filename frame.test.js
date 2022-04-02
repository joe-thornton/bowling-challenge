const Frame = require("./frame");

describe("frame", () => {
  it("returns a frame total of 2", () => {
    frame = new Frame();
    frame.roll(1);
    frame.roll(1);
    expect(frame.total()).toEqual(2);
  });
});
