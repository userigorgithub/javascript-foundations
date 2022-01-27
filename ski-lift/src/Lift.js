var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  
  admitSkier(name, hasLiftTicket) {
    if (this.skiers.length >= this.limit) {
      return `Sorry, ${name}. Please wait for the next lift!`
    }
    if (!hasLiftTicket) {
      return `Sorry, ${name}. You need a lift ticket!`
    }
    this.skiers.push(new Skier(name, hasLiftTicket));
  }

  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down';
    }

    if (this.skiers.length < this.limit) {
      var availableSpots = this.limit - this.skiers.length;
      return `We still need ${availableSpots} more ${availableSpots === 1 ? 'skier' : 'skiers'}!`
    }

    // if (this.limit - this.skiers.length === 1) {
    //   return 'We still need 1 more skier!';
    // }
    // if (this.limit - this.skiers.length === 2) {
    //   return 'We still need 2 more skiers!';
    // }
  }
}

module.exports = Lift;
