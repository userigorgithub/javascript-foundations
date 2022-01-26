class Magician {
  constructor(magicianObj) {
    this.name = `The Great ${magicianObj.name}`;
    this.assistant = magicianObj.assistant;
    this.favoriteAccessory = magicianObj.clothing || 'top hat';
    this.confidencePercentage = 10;
  }

  performIncantation(incantation) {
    return `${incantation.toUpperCase()}!`;
  }

  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    }
    return 'PULL DOVE FROM SLEEVE';
  }

  performShowStopper() {
    if (this.confidencePercentage < 100 || !this.assistant) {
      return 'Oh no, this trick is not ready!'
    }
    return 'WOW! The magician totally just sawed that person in half!'
  }
}

module.exports = Magician;
