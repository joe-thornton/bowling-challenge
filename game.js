const Frame = require("./frame");

class Game {
  constructor(frame = new Frame(1)) {
    this.frames = [];
    this.frames.push(frame);
  }

  newFrame(frame = new Frame(this.frames.length + 1)) {
    this.frames.push(frame);
  }

  roll(pins) {
    let currentFrame = this.frames.at(-1);
    if (this.frames.length === 11) {
      throw new Error("You cannot roll more than 10 frames");
    }
    currentFrame.roll(pins);
    this.processFrameStatus(currentFrame);
  }

  processFrameStatus(currentFrame) {
    let status = currentFrame.frameStatus();
    if (status !== "In progress") {
      this.newFrame();
    }
  }

  showScorecard() {
    return this.calculateScorecard();
  }

  calculateScorecard() {
    let scorecard = this.frames.map((frame, index) => {
      if (frame.frameStatus() === "Complete") {
        return frame.total();
      } else if (frame.frameStatus() === "Spare") {
        if (this.nextRoll(index) !== undefined) {
          return 10 + this.nextRoll(index);
        }
      } else if (frame.frameStatus() === "Strike") {
        if (this.nextTwoRolls(index) !== undefined) {
          return 10 + this.nextTwoRolls(index);
        }
      }
    });
    let filteredScorecard = scorecard.filter((score) => {
      return score !== undefined;
    });
    return filteredScorecard;
  }

  nextRoll(currentFrameIndex) {
    return this.frames[currentFrameIndex + 1].firstRoll();
  }

  nextTwoRolls(currentFrameIndex) {
    let nextFrame = this.frames[currentFrameIndex + 1];
    if (nextFrame.hasTwoRolls() === true) {
      return nextFrame.twoRollScore();
    } else {
      if (nextFrame.firstRoll() === 10) {
        let frameAfterNext = this.frames[currentFrameIndex + 2];
        if (frameAfterNext.hasRolls() === true) {
          return 10 + frameAfterNext.firstRoll();
        }
      }
    }
  }

  totalScore() {
    return this.calculateScorecard().reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }
}

module.exports = Game;
