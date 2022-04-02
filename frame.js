class Frame {
  constructor() {
    this.turns = [];
    this.status = "In play";
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
