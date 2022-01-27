class Skater {
  constructor(skaterObj) {
    this.name = skaterObj.name;
    this.skill = skaterObj.skill;
    this.tricks = skaterObj.tricks;
    this.money = skaterObj.cash;
    this.frustration = 0;
  }

  practice(trickName) {
    var knowsTrick = this.tricks[trickName];
    if (!knowsTrick) {
      this.frustration++;
    }
    if (this.frustration >= 3) {
    this.tricks[trickName] = true;
    this.frustration = 0;
      return `I just learned to ${trickName}!!!`
    }
  }
}

module.exports = Skater;
