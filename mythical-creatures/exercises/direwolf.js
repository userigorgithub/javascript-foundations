class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(starkObject) {
    if (this.home === starkObject.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(starkObject);
      starkObject.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(starkObject) {
    this.starksToProtect.pop();
    starkObject.safe = false;
  }
}

module.exports = Direwolf;
