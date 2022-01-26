class Sphinx {
  constructor() {
    this.name = '';
    this.riddles = [];
    this.heroesEaten = 0;

  }
  collectRiddle(riddle) {
    if (this.riddles.length > 2) {
      this.riddles.shift();
      this.riddles.push(riddle);
      return riddle;
    } else {
      this.riddles.push(riddle);
    }
  }

  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answer) {
        this.riddles.splice(i,1);
        if (this.riddles.length === 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
        }
      return `That wasn\'t that hard, I bet you don\'t get the next one`;
      }
    }
    this.heroesEaten++;
  }
}

module.exports = Sphinx;
