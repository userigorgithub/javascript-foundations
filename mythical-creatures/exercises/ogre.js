class Ogre {
  constructor(ogreObject) {
    this.name = ogreObject.name;
    this.home = ogreObject.abode || 'Swamp';
    this.swings = 0;
  }
  
  encounter(human) {
    human.encounterCounter++;
    if (human.encounterCounter === 3 || human.encounterCounter === 6) {
      this.swingAt(human);
    }
  }

  swingAt(human) {
    this.swings++;
    if (this.swings === 2) {
      human.knockedOut = true;
    }
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
