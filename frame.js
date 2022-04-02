class Frame {
  constructor() {
    this.turns = [];
  }

  roll(pins) {
    this.turns.push(pins);
  }

  total() {
    return this.turns.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }
}

module.exports = Frame;
