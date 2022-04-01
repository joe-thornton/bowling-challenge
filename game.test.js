const Game = require("./game.js");

describe("game", () => {
  it("rolls a single figure roll and returns no score", () => {
    game = new Game();
    game.roll(1);
    expect(game.scorecard).toEqual([null]);
  });
});
