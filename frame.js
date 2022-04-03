class Frame {
  constructor() {
    this.turns = [];
    this.status = "In progress";
  }

  roll(pins) {
    this.turns.push(pins);
  }

  frameStatus() {
    if (this.turns.length === 2) {
      if (this.total() === 10) {
        this.status = "Spare";
      } else {
        this.status = "Complete";
      }
    }
    return this.status;
  }

  total() {
    return this.turns.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }
}

module.exports = Frame;
