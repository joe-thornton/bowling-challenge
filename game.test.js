const Game = require("./game");

describe("game", () => {
  it("rolls a single figure roll and returns no score", () => {
    game = new Game();
    game.roll(1);
    expect(game.scorecard).toEqual([]);
  });

  it("rolls 2 scores of 1", () => {
    game = new Game();
    [1, 1].forEach((pins) => {
      game.roll(pins);
    });
    expect(game.scorecard).toEqual([2]);
  });

  it.skip("rolls 4 scores of 1", () => {
    game = new Game();
    [1, 1, 1, 1].forEach((pins) => {
      game.roll(pins);
    });
    expect(game.scorecard).toEqual([2, 2]);
  });
});
