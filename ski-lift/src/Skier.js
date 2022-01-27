class Skier {
  constructor(name) {
    this.name = name;
    this.hasLiftTicket = true;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';
  }

  takeLesson() {
    this.skillLevel++;
  }

  pickSlope() {
    if (this.skillLevel > 2 && this.skillLevel < 5) {
      this.nextSlope = 'blue square';
    } else {
      this.nextSlope = 'black diamond';
    }
  }
}

module.exports = Skier;
