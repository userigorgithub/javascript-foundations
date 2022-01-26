class Guard {
  constructor(name, socialClass, rank) {
    this.name = name;
    this.socialClass = socialClass;
    this.rank = rank || 'newbie';
    this.timesBattled = 0;
    this.arrowToTheKnee = false;
  }
  toBattle() {
    this.timesBattled += 1;
    if (this.timesBattled >= 3) {
      this.rank = 'veteran';
      this.arrowToTheKnee = true;
    }
  }
  exist() {
    if (this.rank === 'newbie') {
      return "Let me guess... Someone stole your sweetroll?";
    } else if (this.rank === 'veteran') {
      return "I used to be an adventurer like you, until I took an arrow to the knee.";
    }
  }
}

module.exports = Guard;
