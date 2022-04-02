const Frame = require("./frame");

class Game {
  constructor(frame = new Frame()) {
    this.scorecard = [];
    this.frames = [];
    this.frames.push(frame);
  }

  newFrame(frame = new Frame()) {
    this.frames.push(frame);
  }

  roll(pins) {
    let current_frame = this.frames.at(-1);
    current_frame.roll(pins);
    this.checkFrameStatus(current_frame);
  }

  checkFrameStatus(current_frame) {
    if (current_frame.checkStatus() === "Complete") {
      this.scorecard.push(current_frame.total());
      this.newFrame();
    }
  }

  showScorecard() {
    return this.scorecard;
  }

  totalScore() {
    return this.scorecard.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }
}

module.exports = Game;
