class Game {
  constructor() {
    this.scorecard = [];
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(1);
    if (this.rolls.length % 2 === 0) {
      this.scorecard.push(
        this.rolls.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        )
      );
    }
  }
}

module.exports = Game;
