const Game = require("./game");

describe("game", () => {
  it("rolls a single figure roll and returns no score", () => {
    game = new Game();
    game.roll(1);
    expect(game.scorecard).toEqual([]);
  });
  it("rolls a single figure roll and returns no score", () => {
    game = new Game();
    game.roll(1);
    game.roll(1);
    expect(game.scorecard).toEqual([2]);
  });
});
