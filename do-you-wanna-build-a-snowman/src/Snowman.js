class Snowman {
  constructor(snowmanDetails) {
    this.carrots = snowmanDetails.carrots;
    this.coal = snowmanDetails.coal;
    this.buttons = snowmanDetails.buttons;
    this.snowballs = snowmanDetails.snowballs;
    this.magicHat = false;
  }

  canWearMagicHat() {
    this.magicHat = true;
    if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
      this.magicHat = false;
    }
  }
}

module.exports = Snowman;
