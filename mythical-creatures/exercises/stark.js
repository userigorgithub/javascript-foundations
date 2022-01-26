var Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(starkObject, location) {
    this.name = starkObject.name;
    this.location = starkObject.area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }

  callDirewolf(name, home) {
    var newDirewolf = new Direwolf(name, home);
    newDirewolf.home = this.location;
    newDirewolf.protect(this);
    return newDirewolf;
  }
}

module.exports = Stark;
