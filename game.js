const Frame = require("./frame");

class Game {
  constructor(frame = new Frame()) {
    this.scorecard = [];
    this.frames = [];
    this.frames.push(frame);
    this.spare_backlog = 0;
  }

  newFrame(frame = new Frame()) {
    this.frames.push(frame);
  }

  roll(pins) {
    let current_frame = this.frames.at(-1);
    current_frame.roll(pins);
    this.processSpares(pins);
    this.checkFrameStatus(current_frame);
  }

  checkFrameStatus(current_frame) {
    let status = current_frame.frameStatus();
    if (status !== "In progress") {
      if (status === "Complete") {
        this.scorecard.push(current_frame.total());
      } else if ((status = "Spare")) {
        ++this.spare_backlog;
      }
      this.newFrame();
    }
  }

  processSpares(current_frame_pins) {
    if (this.spare_backlog === 1) {
      this.scorecard.push(this.scoreSpare(current_frame_pins));
      --this.spare_backlog;
    }
  }

  scoreSpare(current_frame_pins) {
    return 10 + current_frame_pins;
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
