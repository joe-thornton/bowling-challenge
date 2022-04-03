class Frame {
  constructor() {
    this.turns = [];
    this.status = "In progress";
  }

  roll(pins) {
    this.turns.push(pins);
  }

  frameStatus() {
    if (this.turns[0] === 10) {
      this.status = "Strike";
    } else if (this.turns.length === 2) {
      if (this.total() === 10) {
        this.status = "Spare";
      } else {
        this.status = "Complete";
      }
    }
    return this.status;
  }

  firstRoll() {
    return this.turns[0];
  }

  hasTwoRolls() {
    if (this.turns.length === 2) {
      return true;
    }
  }

  hasRolls() {
    if (this.turns.length !== 0) {
      return true;
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
