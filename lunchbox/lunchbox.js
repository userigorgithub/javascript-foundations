class LunchBox {
  constructor(lunchBoxObject) {
    this.owner = lunchBoxObject.owner;
    this.material = lunchBoxObject.madeOf;
    this.shape = lunchBoxObject.shape;
    this.color = lunchBoxObject.color;
    this.snacks = [];
  }

  acquireSnack(someSnack) {
    this.snacks.push(someSnack);
    someSnack.isInLunchBox = true;
  }

  findHealthySnacks() {
    var healthySnacks = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type);
      }
    }
    return healthySnacks;
  }
}

module.exports = LunchBox;
