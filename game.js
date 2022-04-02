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
    if (current_frame.turns.length === 2) {
      this.scorecard.push(current_frame.total());
      current_frame.status = "Complete";
      this.newFrame();
    }
  }

  showScorecard() {
    return this.scorecard;
  }
}

module.exports = Game;
