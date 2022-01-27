var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    };

  }
  gatherMaterials(gatheredMaterials, amount) {
    this.materials[gatheredMaterials] = this.materials[gatheredMaterials] + amount;
  }

  buildASnowman() {
    var newSnowman = new Snowman(this.materials);
      newSnowman.canWearMagicHat();
      return newSnowman;
  }

  placeMagicHat() {
    if (this.materials.coal < 2 || this.materials.buttons < 5 || this.materials.carrots < 1 || this.materials.nowballs < 2) {
      return 'I guess I didn\'t build it correctly.';
    }
    return 'Woah, this snowman is coming to life!';
  }
}

module.exports = Human;
