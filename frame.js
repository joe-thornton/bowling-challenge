class Frame {
  constructor() {
    this.turns = [];
    this.status = "In play";
  }

  roll(pins) {
    this.turns.push(pins);
  }

  checkStatus() {
    if (this.turns.length === 2) {
      this.status = "Complete";
      return this.status;
    }
  }

  total() {
    return this.turns.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }
}

module.exports = Frame;
