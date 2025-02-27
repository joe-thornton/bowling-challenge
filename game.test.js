const Game = require("./game");

describe("game", () => {
  it("rolls a single figure roll and returns no score", () => {
    game = new Game();
    game.roll(1);
    expect(game.showScorecard()).toEqual([]);
  });

  it("rolls 2 scores of 1", () => {
    game = new Game();
    [1, 1].forEach((pins) => {
      game.roll(pins);
    });
    expect(game.showScorecard()).toEqual([2]);
  });

  it("rolls 4 scores of 1", () => {
    game = new Game();
    [1, 1, 1, 1].forEach((pins) => {
      game.roll(pins);
    });
    expect(game.showScorecard()).toEqual([2, 2]);
  });

  it("rolls a complete game with scores of 1", () => {
    game = new Game();
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.showScorecard()).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
  });

  it("rolls a gutter game", () => {
    game = new Game();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.totalScore()).toEqual(0);
  });

  it("can roll a spare", () => {
    game = new Game();
    game.roll(8);
    game.roll(2);
    game.roll(3);
    game.roll(3);
    expect(game.showScorecard()).toEqual([13, 6]);
  });

  it("can roll a strike", () => {
    game = new Game();
    game.roll(10);
    game.roll(2);
    game.roll(3);
    game.roll(1);
    expect(game.showScorecard()).toEqual([15, 5]);
  });

  it("can roll 2 strikes", () => {
    game = new Game();
    game.roll(10);
    game.roll(10);
    game.roll(2);
    game.roll(3);
    game.roll(1);
    expect(game.showScorecard()).toEqual([22, 15, 5]);
  });

  it("cant roll more than 10 frames", () => {
    game = new Game();
    for (let i = 0; i < 10; i++) {
      game.roll(2);
      game.roll(3);
    }
    expect(() => game.roll(1)).toThrow("You cannot roll more than 10 frames");
  });

  it("can bowl a perfect game", () => {
    game = new Game();
    for (let i = 0; i < 12; i++) {
      game.roll(10);
    }
    expect(game.calculateScorecard()).toEqual[
      (30, 30, 30, 30, 30, 30, 30, 30, 30, 30)
    ];
  });

  it("can bowl and almost perfect game", () => {
    game = new Game();
    for (let i = 0; i < 11; i++) {
      game.roll(10);
    }
    game.roll(9);
    console.log(game.showScorecard());
    expect(game.totalScore()).toEqual(299);
  });

  // it("cant roll more than 10 frames", () => {
  //   game = new Game();
  //   for (let i = 0; i < 12; i++) {
  //     game.roll(10);
  //   }
  //   expect(game.calculateScorecard()).toEqual[
  //     (30, 30, 30, 30, 30, 30, 30, 30, 30, 30)
  //   ];
  // });

  // it("can roll a perfect game", () => {
  //   game = new Game();
  //   for (let i = 0; i < 12; i++) {
  //     game.roll(10);
  //   }
  //   expect(game.totalScore()).toEqual(300);
  // });
});
