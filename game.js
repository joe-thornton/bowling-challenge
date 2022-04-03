const Frame = require("./frame");

class Game {
  constructor(frame = new Frame()) {
    this.scorecard = [];
    this.frames = [];
    this.frames.push(frame);
    this.spareBacklog = 0;
    this.strikeBacklog = 0;
  }

  newFrame(frame = new Frame()) {
    this.frames.push(frame);
  }

  roll(pins) {
    let currentFrame = this.frames.at(-1);
    currentFrame.roll(pins);
    this.processSpares(pins);
    this.processStrikes(pins);
    this.checkFrameStatus(currentFrame);
  }

  processStrikes(currentRollsPins) {
    if (this.strikeBacklog === 2) {
      this.scorecard.push(20 + currentRollsPins);
      --this.strikeBacklog;
    }
    // if (this.strikeBacklog === 1) {
    //   if (currentRollsPins === 10) {
    //     ++this.strikeBacklog;
    //   } else {
    //   }
    // }
  }

  checkFrameStatus(current_frame) {
    let status = current_frame.frameStatus();
    console.log(status);
    if (status !== "In progress") {
      if (status === "Complete") {
        this.scorecard.push(current_frame.total());
      } else if ((status = "Spare")) {
        ++this.spareBacklog;
      } else if ((status = "Strike")) {
        ++this.strikeBacklog;
      }
      this.newFrame();
    }
  }

  processSpares(currentRollPins) {
    if (this.spareBacklog === 1) {
      this.scorecard.push(this.scoreSpare(currentRollPins));
      --this.spareBacklog;
    }
  }

  scoreSpare(currentRollPins) {
    return 10 + currentRollPins;
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
